const jogos = [
  { nome: "Coelho da Sorte", img: "fortune-rabbit.jpg" },
  { nome: "Coelho da Sorte 2", img: "fortune-rabbit2.jpg" },
  { nome: "Tigre da Sorte", img: "fortune-tiger.jpg" },
  { nome: "Zeus vs Hades", img: "zeus.jpg" }
];

const grid = document.getElementById('games-grid');

jogos.forEach(jogo => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <img src="${jogo.img}" alt="${jogo.nome}">
    <p>${jogo.nome}</p>
    <div class="game-buttons">
      <button onclick="window.open('https://www.google.com/search?q=${jogo.nome}+1', '_blank')">Opção 1</button>
      <button onclick="window.open('https://www.google.com/search?q=${jogo.nome}+2', '_blank')">Opção 2</button>
      <button onclick="window.open('https://www.google.com/search?q=${jogo.nome}+3', '_blank')">Opção 3</button>
    </div>
  `;
  grid.appendChild(card);
});

document.getElementById('topo-btn').onclick = () => window.scrollTo({top: 0, behavior: 'smooth'});
if('serviceWorker' in navigator) { navigator.serviceWorker.register('sw.js'); }
