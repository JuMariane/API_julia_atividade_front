# 🎬 CineTech - Avaliação de Filmes (Atividade Prática de Integração com API)

Projeto desenvolvido para a atividade prática de integração com a **OMDb API (The Open Movie Database)**.

## 🚀 Tecnologias Utilizadas
- **HTML5**: Estrutura semântica da aplicação.
- **CSS3**: Estilização moderna com design escuro, degradês, efeito de vidro (*glassmorphism*) e responsividade.
- **JavaScript (ES6+)**: Consumo de API assíncrona com `fetch` / `async/await`, manipulação do DOM e sistema interativo de avaliação por estrelas.

---

## 📁 Estrutura de Arquivos
- [`index.html`](file:///c:/Users/JuliaMarianeDosSanto/Downloads/Nova%20pasta%20%282%29/index.html) - Página principal e estrutura da aplicação.
- [`style.css`](file:///c:/Users/JuliaMarianeDosSanto/Downloads/Nova%20pasta%20%282%29/style.css) - Estilização completa e visual moderno.
- [`script.js`](file:///c:/Users/JuliaMarianeDosSanto/Downloads/Nova%20pasta%20%282%29/script.js) - Lógica de busca na OMDb API e interatividade das estrelas.

---

## 🔑 Como Utilizar a sua Própria Chave da API (API Key)
Por padrão, o projeto já vem com uma chave funcional de demonstração configurada (`'trilogy'`).
Para utilizar a sua chave própria gerada no [OMDb API](http://www.omdbapi.com/apikey.aspx):

1. Abra o arquivo [`script.js`](file:///c:/Users/JuliaMarianeDosSanto/Downloads/Nova%20pasta%20%282%29/script.js).
2. Na linha 6, altere o valor da variável `apiKey`:
   ```javascript
   const apiKey = 'SUA_CHAVE_AQUI';
   ```
3. Salve o arquivo e recarregue a página no navegador.

---

## 🌟 Funcionalidades
1. **Busca Dinâmica**: Digite o título de qualquer filme em inglês (ex: *Inception*, *Avatar*, *Titanic*, *Interstellar*) e clique em **Buscar** ou pressione **Enter**.
2. **Exibição dos Dados**: Pôster oficial, título e ano de lançamento vindos diretamente da OMDb API.
3. **Avaliação Interativa**: Clique em qualquer uma das 5 estrelas para definir a nota do filme (as estrelas anteriores ficam ativas e destacadas).

---

## 📤 Como enviar para o GitHub (Passo a Passo)
1. Crie um repositório no seu GitHub com o nome `API_julia_atividade_front`.
2. No terminal da pasta do projeto, execute:
   ```bash
   git init
   git add .
   git commit -m "feat: implementando projeto cinetech omdb api"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/API_julia_atividade_front.git
   git push -u origin main
   ```
