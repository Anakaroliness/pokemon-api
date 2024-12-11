const translations = {
    fire: "Fogo",
    water: "Água",
    grass: "Grama",
    electric: "Elétrico",
    ground: "Terra",
    rock: "Pedra",
    flying: "Voador",
    ice: "Gelo",
    bug: "Inseto",
    poison: "Veneno",
    psychic: "Psíquico",
    ghost: "Fantasma",
    dragon: "Dragão",
    dark: "Noturno",
    steel: "Aço",
    fairy: "Fada",
    fighting: "Lutador",
    normal: "Normal",
    // Tradução de habilidades
    static: "Estático",
    lightningrod: "Para-raios",
    overgrow: "Supercrescimento",
    blaze: "Chama",
    torrent: "Torrente",
    shielddust: "Pó de Escudo"
    // Adicione mais habilidades conforme necessário
};

const abilityTranslations = Object.entries(translations).reduce((acc, [key, value]) => {
    acc[value.toLowerCase()] = key; // Inverte o dicionário para busca em português
    return acc;
}, {});

document.getElementById("searchButton").addEventListener("click", async () => {
    const searchInput = document.getElementById("pokemonSearch").value.trim().toLowerCase();
    const errorMessage = document.getElementById("errorMessage");
    const pokemonInfo = document.getElementById("pokemonInfo");
    const pokemonImage = document.getElementById("pokemonImage");
    const pokemonName = document.getElementById("pokemonName");
    const pokemonId = document.getElementById("pokemonId");
    const pokemonHeight = document.getElementById("pokemonHeight");
    const pokemonWeight = document.getElementById("pokemonWeight");
    const pokemonTypes = document.getElementById("pokemonTypes");
    const pokemonWeaknesses = document.getElementById("pokemonWeaknesses");

    if (!searchInput) {
        errorMessage.textContent = "Por favor, digite o nome ou a habilidade do Pokémon.";
        pokemonInfo.style.display = "none";
        return;
    }

    try {
        let data;

        // Tenta buscar por nome de Pokémon
        try {
            const apiUrl = `https://pokeapi.co/api/v2/pokemon/${searchInput}`;
            const response = await fetch(apiUrl);
            if (!response.ok) throw new Error();
            data = await response.json();
        } catch {
            // Caso falhe, tenta buscar por habilidade
            const translatedAbility = abilityTranslations[searchInput];
            if (!translatedAbility) throw new Error("Habilidade não encontrada em português.");
            
            const abilityUrl = `https://pokeapi.co/api/v2/ability/${translatedAbility}`;
            const abilityResponse = await fetch(abilityUrl);
            if (!abilityResponse.ok) throw new Error("Nenhum Pokémon encontrado com essa habilidade.");
            const abilityData = await abilityResponse.json();
            if (abilityData.pokemon.length === 0) throw new Error("Nenhum Pokémon encontrado com essa habilidade.");
            const firstPokemon = abilityData.pokemon[0].pokemon;
            const firstPokemonResponse = await fetch(firstPokemon.url);
            if (!firstPokemonResponse.ok) throw new Error();
            data = await firstPokemonResponse.json();
        }

        // Tradução dos tipos
        const translatedTypes = data.types.map(t => translations[t.type.name] || t.type.name).join(", ");

        // Atualiza os elementos com as informações do Pokémon
        pokemonImage.src = data.sprites.front_default;
        pokemonName.textContent = `Nome: ${data.name.charAt(0).toUpperCase() + data.name.slice(1)}`;
        pokemonId.textContent = `ID: ${data.id}`;
        pokemonHeight.textContent = `Altura: ${data.height / 10} metros`;
        pokemonWeight.textContent = `Peso: ${data.weight / 10} kg`;
        pokemonTypes.textContent = `Tipos: ${translatedTypes}`;
        pokemonWeaknesses.textContent = `Fraquezas: ${calculateWeaknesses(data.types)}`;

        pokemonInfo.style.display = "block";
        errorMessage.textContent = "";
    } catch (error) {
        errorMessage.textContent = error.message || "Pokémon não encontrado!";
        pokemonInfo.style.display = "none";
    }
});

function calculateWeaknesses(types) {
    const typeWeaknesses = {
        fire: ["water", "rock", "ground"],
        water: ["electric", "grass"],
        grass: ["fire", "flying", "ice"],
        electric: ["ground"],
        ground: ["water", "grass", "ice"]
    };

    const weaknesses = new Set();
    types.forEach(type => {
        const typeName = type.type.name;
        if (typeWeaknesses[typeName]) {
            typeWeaknesses[typeName].forEach(weakness => weaknesses.add(translations[weakness] || weakness));
        }
    });

    return Array.from(weaknesses).join(", ");
}
