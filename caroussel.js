const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const imagens = document.querySelector('.imagens');
const totalImagens = imagens.children.length;
let currentIndex = 0;

function showImage(index) {
  if (index < 0) {
    currentIndex = totalImagens - 1; // Se for menor que 0, vai para a última imagem
  } else if (index >= totalImagens) {
    currentIndex = 0; // Se for maior ou igual ao total de imagens, vai para a primeira
  }
  imagens.style.transform = `translateX(-${currentIndex * 100}%)`; // Altera o valor de deslocamento
}

// Ao clicar na seta anterior
prevButton.addEventListener('click', () => {
  currentIndex--;
  showImage(currentIndex);
});

// Ao clicar na seta próxima
nextButton.addEventListener('click', () => {
  currentIndex++;
  showImage(currentIndex);
});

// Para permitir navegação com teclas (setas)
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') {
    currentIndex--;
    showImage(currentIndex);
  } else if (e.key === 'ArrowRight') {
    currentIndex++;
    showImage(currentIndex);
  }
});
