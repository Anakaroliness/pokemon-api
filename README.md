# Projeto API Pokémon

## Descrição
Este projeto é uma interface web que utiliza a [PokéAPI](https://pokeapi.co/) para buscar informações sobre Pokémons. Os usuários podem pesquisar por Pokémons utilizando seus nomes ou habilidades, visualizando informações detalhadas como:

- **ID do Pokémon**
- **Altura**
- **Peso**
- **Tipos**
- **Fraquezas** 

## Funcionalidades

- **Busca por Nome**: Permite pesquisar Pokémons pelo seu nome.
- **Busca por Habilidade**: Retorna o primeiro Pokémon que possui a habilidade pesquisada.
- **Traduções**: Tipos e habilidades são traduzidos para português.
- **Mensagens de Erro**: Exibe mensagens claras quando o Pokémon ou habilidade não são encontrados.

## Tecnologias Utilizadas

- **HTML**: Estrutura do site.
- **CSS**: Estilização com tema gamer, incluindo fontes pixeladas e cores vibrantes.
- **JavaScript**: Lógica para consumir a API e manipular a interface dinâmica.

## Como Usar

1. Clone o repositório para sua máquina local:
   ```bash
   git clone https://github.com/seuusuario/seurepositorio.git
   ```

2. Navegue até a pasta do projeto:
   ```bash
   cd nome-do-projeto
   ```

3. Abra o arquivo `index.html` em um navegador.

4. Use a barra de pesquisa para:
   - Digitar o nome de um Pokémon (ex.: "pikachu").
   - Digitar uma habilidade em português (ex.: "Estático").

## Estrutura do Projeto

```
PokemonAPIProject/
├── index.html  # Estrutura HTML do site
├── style.css   # Estilização do site
├── script.js   # Lógica em JavaScript
```

## Exemplos de Uso

1. **Pesquisa por Nome**:
   - Digite "charizard" na barra de pesquisa.
   - Exibe informações como ID, altura, peso, tipos e fraquezas do Charizard.

2. **Pesquisa por Habilidade**:
   - Digite "Para-raios" (habilidade em português).
   - Retorna o primeiro Pokémon que possui essa habilidade.

## Personalizações

- Para adicionar mais habilidades traduzidas, edite o objeto `translations` no arquivo `script.js`.
- O tema visual pode ser alterado no arquivo `style.css`.

## Contribuições

Sinta-se à vontade para contribuir com melhorias, correções ou novas funcionalidades.

1. Faça um fork do repositório.
2. Crie uma branch para sua modificação:
   ```bash
   git checkout -b minha-modificacao
   ```
3. Faça o commit das suas alterações:
   ```bash
   git commit -m "Adicionei uma nova funcionalidade"
   ```
4. Envie as alterações:
   ```bash
   git push origin minha-modificacao
   ```
5. Abra um Pull Request no GitHub.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

