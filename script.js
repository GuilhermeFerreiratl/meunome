document.querySelectorAll('.menu-item').forEach(btn => {
  btn.addEventListener('click', function() {
    const nome = this.dataset.menu;
    
    document.getElementById('home-screen').style.display = 'none';
    document.getElementById('menu-screen').style.display = 'block';
    document.getElementById('menu-title').innerText = nome;

    document.querySelectorAll('.menu-item').forEach(b => b.classList.remove('active'));
    this.classList.add('active');

    // 3 botões vão pro Google
    document.getElementById('btn1').onclick = () => window.open(`https://www.google.com/search?q=${nome}+1`, '_blank');
    document.getElementById('btn2').onclick = () => window.open(`https://www.google.com/search?q=${nome}+2`, '_blank');
    document.getElementById('btn3').onclick = () => window.open(`https://www.google.com/search?q=${nome}+3`, '_blank');
  });
});
