var sections = document.querySelectorAll('.section');
var windowHeight = window.innerHeight;

function revealSections() {
  sections.forEach(function(section) {
    var sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < windowHeight && !section.classList.contains('revealed')) {
      section.classList.add('revealed'); // Adiciona a classe 'revealed' para revelar a seção com uma animação de fade-in
    }
  });
}

window.addEventListener('scroll', revealSections);
window.addEventListener('resize', revealSections);
revealSections(); // Chama a função inicialmente para revelar as seções visíveis
