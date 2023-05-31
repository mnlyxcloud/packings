// Evento que é acionado quando a página é carregada
window.addEventListener('load', function() {
    // Selecione o elemento raiz (html)
    var rootElement = document.documentElement;
  
    // Role a página até o elemento raiz (topo da página)
    rootElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  