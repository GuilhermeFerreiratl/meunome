const menuItens = document.querySelectorAll('.menu-item');
const homeScreen = document.getElementById('home-screen');
const menuScreen = document.getElementById('menu-screen');
const menuTitle = document.getElementById('menu-title');
const pageTitle = document.getElementById('page-title');

menuItens.forEach(item => {
  item.onclick = () => {
    const nome = item.getAttribute('data-menu');
    abrirMenu(nome);

    // tira e coloca active
    menuItens.forEach(i => i.classList.remove('active'));
    item.classList.add('active');
  }
});

function abrirMenu(nome) {
  homeScreen.style.display = 'none';
  menuScreen.style.display = 'block';
  
  menuTitle.innerText = nome;
  pageTitle.innerText = `🔥 ${nome}`;

  // Os 3 botões abrem Google pesquisando o nome do menu
  document.getElementById('btn1').onclick = () => window.open(`https://www.google.com/search?q=${nome}+Opção+1`, '_blank');
  document.getElementById('btn2').onclick = () => window.open(`https://www.google.com/search?q=${nome}+Opção+2`, '_blank');
  document.getElementById('btn3').onclick = () => window.open(`https://www.google.com/search?q=${nome}+Opção+3`, '_blank');
}

// Botão voltar
document.getElementById('back-btn').onclick = () => {
  menuScreen.style.display = 'none';
  homeScreen.style.display = 'block';
}

document.getElementById('topo-btn').onclick = () => window.scrollTo({top: 0, behavior: 'smooth'});
if('serviceWorker' in navigator) { navigator.serviceWorker.register('sw.js'); }
