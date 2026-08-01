const botoesMenu = document.querySelectorAll('.menu-btn');
const telaHome = document.getElementById('home');
const telaMenu = document.getElementById('tela-menu');

botoesMenu.forEach(botao => {
  botao.addEventListener('click', function() {
    const nome = this.getAttribute('data-menu');
    
    // Esconde home e mostra tela do menu
    telaHome.style.display = 'none';
    telaMenu.style.display = 'block';
    
    document.getElementById('titulo-menu').innerText = nome;
    document.getElementById('titulo-pagina').innerText = nome;

    // Marca ativo
    botoesMenu.forEach(b => b.classList.remove('active'));
    this.classList.add('active');

    // 3 botões pro Google
    document.getElementById('g1').onclick = () => window.open(`https://www.google.com/search?q=${nome}+1`, '_blank');
    document.getElementById('g2').onclick = () => window.open(`https://www.google.com/search?q=${nome}+2`, '_blank');
    document.getElementById('g3').onclick = () => window.open(`https://www.google.com/search?q=${nome}+3`, '_blank');
  });
});

document.getElementById('voltar').onclick = () => {
  telaMenu.style.display = 'none';
  telaHome.style.display = 'block';
}
