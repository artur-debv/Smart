 export const BackToTop = () => {
    const backToTopButton = document.getElementById('backToTop');
  
    // Função para mostrar ou ocultar o botão com base na rolagem da página
    const toggleBackToTopButton = () => {
      if (window.scrollY > 300) { // Mostra o botão se o usuário rolar mais de 300px
        backToTopButton.style.display = 'block';
      } else {
        backToTopButton.style.display = 'none';
      }
    };
  
    // Função para rolar a página instantaneamente para o topo
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'instant' // Rola instantaneamente
      });
    };
  
    // Adiciona os listeners
    window.addEventListener('scroll', toggleBackToTopButton);
    backToTopButton.addEventListener('click', scrollToTop);
  };

  