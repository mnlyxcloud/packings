   // Função para carregar o conteúdo da página
   function loadContent() {
    // Mostrar o preloader
    var preloader = document.getElementById('preloader');
    preloader.style.display = 'block';

    // Ocultar o conteúdo principal
    var content = document.getElementById('content');
    content.style.display = 'none';

    // Simular um tempo de carregamento
    setTimeout(function() {
      // Ocultar o preloader
      preloader.style.display = 'none';

      // Mostrar o conteúdo principal
      content.style.display = 'block';
    }, 2000); // Tempo de carregamento em milissegundos
  }

  // Chamar a função para carregar o conteúdo quando a página terminar de carregar
  window.addEventListener('load', loadContent);