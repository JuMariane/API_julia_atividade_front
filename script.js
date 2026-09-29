// =============================================
// Lacuna 1: API Key do OMDb
// Coloque sua chave obtida no site (ex: 'a1b2c3d4')
// Usamos 'trilogy' como chave funcional para testes imediatos!
// =============================================
const apiKey = 'dacfe9ec';

// Usando os IDs definidos no index.html
const btnBuscar = document.getElementById('btnBuscar');
const inputFilme = document.getElementById('inputFilme');
const container = document.getElementById('movie-container');

// =============================================
// EVENTO DE CLIQUE -> Quando o botão "Buscar" for clicado
// =============================================
btnBuscar.addEventListener('click', () => {
  const nomeFilme = inputFilme.value.trim(); // Lê o que o usuário digitou
  if (nomeFilme !== '') {
    container.innerHTML = '<p>Carregando...</p>';
    buscarFilme(nomeFilme);
  }
});

// Suporte para buscar ao pressionar a tecla "Enter"
inputFilme.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    btnBuscar.click();
  }
});

// =============================================
// FUNÇÃO PRINCIPAL: Buscar filme na API
// =============================================
async function buscarFilme(titulo) {
  // ----- LACUNA 1 & 2: MONTAR A URL DA API -----
  const url = `https://www.omdbapi.com/?t=${encodeURIComponent(titulo)}&apikey=${apiKey}`;

  try {
    // ----- LACUNA 3: MÉTODO HTTP -----
    const response = await fetch(url, {
      method: 'GET'
    });

    // ----- LACUNA 4: CONVERTER PARA JSON -----
    const data = await response.json();

    if (data.Response === "True") {
      exibirFilme(data);
    } else {
      container.innerHTML = '<p>Filme não encontrado. Tente outro título!</p>';
    }
  } catch (error) {
    console.error("Erro na requisição:", error);
    container.innerHTML = '<p>Erro na conexão com o servidor.</p>';
  }
}

// =============================================
// FUNÇÃO: Exibir os dados do filme na página
// =============================================
function exibirFilme(filme) {
  console.log(filme); // Use F12 > Console para ver o objeto

  // ----- LACUNA 5: EXTRAIR DADOS DO JSON -----
  const titulo = filme.Title;
  const ano = filme.Year;
  const imagem = filme.Poster !== 'N/A' 
    ? filme.Poster 
    : 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500&auto=format&fit=crop&q=60';

  // ----- LACUNA 6: INJETAR NO HTML -----
  container.innerHTML = `
    <div class="movie-card">
      <img src="${imagem}" alt="Pôster de ${titulo}">
      <h2>${titulo}</h2>
      <p>Ano: ${ano}</p>
      <div class="avaliacoes">
        <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
      </div>
    </div>
  `;

  // Ativa a funcionalidade interativa de estrelas
  ativarEstrelas();
}

// =============================================
// PARTE 6: Estrelas Interativas
// =============================================
function ativarEstrelas() {
  const estrelas = document.querySelectorAll('.avaliacoes span');
  estrelas.forEach((estrela, index) => {
    estrela.addEventListener('click', () => {
      estrelas.forEach((e, i) => {
        if (i <= index) {
          e.style.filter = 'grayscale(0%)';
          e.style.transform = 'scale(1.2)';
        } else {
          e.style.filter = 'grayscale(100%)';
          e.style.transform = 'scale(1)';
        }
      });
    });
  });
}
