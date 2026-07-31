const jogos = [
  { nome: "Coelho da Sorte", img: "fortune-rabbit.jpg", provider: "PG", link: "#" },
  { nome: "Coelho da Sorte 2", img: "fortune-rabbit2.jpg", provider: "WG", link: "#" },
  { nome: "Tigre da Sorte", img: "fortune-tiger.jpg", provider: "PG", link: "#" },
  { nome: "Cobra da Sorte", img: "fortune-snake.jpg", provider: "PG", link: "#" },
  { nome: "Zeus vs Hades", img: "zeus.jpg", provider: "PG", link: "#" },
  { nome: "Triple Pots", img: "triple-pot.jpg", provider: "PG", link: "#" }
];

const grid = document.getElementById('games-grid');
jogos.forEach(jogo => {
  grid.innerHTML += `
    <div class="card" onclick="window.location.href='${jogo.link}'">
      <div style="position:relative">
        <img src="${jogo.img}" alt="${jogo.nome}">
        <div class="provider">${jogo.provider}</div>
      </div>
      <p>${jogo.nome}</p>
    </div>
  `;
});

document.getElementById('topo-btn').onclick = () => window.scrollTo({top: 0, behavior: 'smooth'});
if('serviceWorker' in navigator) { navigator.serviceWorker.register('sw.js'); }
