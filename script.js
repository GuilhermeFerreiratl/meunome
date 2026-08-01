const jogos = [
  { nome: "Coelho da Sorte", img: "fortune-rabbit.jpg" },
  { nome: "Coelho da Sorte 2", img: "fortune-rabbit2.jpg" },
  { nome: "Tigre da Sorte", img: "fortune-tiger.jpg" },
  { nome: "Zeus vs Hades", img: "zeus.jpg" },
  { nome: "Cobra da Sorte", img: "fortune-snake.jpg" }
];

const homeScreen = document.getElementById('home-screen');
const gameScreen = document.getElementById('game-screen');
const grid = document.getElementById('games-grid');

// Criar os cards clicáveis
jogos.forEach(jogo => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <img src="${jogo.img}" alt="${jogo.nome}">
    <p>${jogo.nome}</p>
  `;
  card.onclick = () => abrirJogo(jogo);
  grid.appendChild(card);
});

// Função para abrir a 2ª tela
function abrirJogo(jogo) {
  homeScreen.style.display = 'none';
  gameScreen.style.display = 'block';
  
  document.getElementById('game-title').innerText = jogo.nome;
  document.getElementById('game-img').src = jogo.img;

  // Os 3 botões vão pro Google pesquisando o nome do jogo
  document.getElementById('btn1').onclick = () => window.open(`https://www.google.com/search?q=${jogo.nome}+Opção+1`, '_blank');
  document.getElementById('btn2').onclick = () => window.open(`https://www.google.com/search?q=${jogo.nome}+Opção+2`, '_blank');
  document.getElementById('btn3').onclick = () => window.open(`https://www.google.com/search?q=${jogo.nome}+Opção+3`, '_blank');
}

// Botão voltar
document.getElementById('back-btn').onclick = () => {
  gameScreen.style.display = 'none';
  homeScreen.style.display = 'block';
}

document.getElementById('topo-btn').onclick = () => window.scrollTo({top: 0, behavior: 'smooth'});
if('serviceWorker' in navigator) { navigator.serviceWorker.register('sw.js'); }
