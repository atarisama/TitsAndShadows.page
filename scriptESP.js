 // Obtener elementos del DOM
 const currentImage = document.getElementById('current-image');
 const prevButton = document.getElementById('prev-button');
 const nextButton = document.getElementById('next-button');
 const imageText = document.getElementById('image-text');

 // Array de imágenes
 const images = [
   'media/HeroBio.jpg',
   'media/GabrielBio.jpg',
   'media/WendigoBio.jpg',
   'media/CherryBio.jpg',
   'media/NombreBio.jpg',
   // Agrega más imágenes aquí
 ];

 const texts = [
  'Hero',
  'Gabriel, tu ángel de confianza, solo con su ayuda podrás acabar con el reinado de Putana',
  'Wendy es una chica que porta la maldición del wendigo, su potencial mágico no tiene límites.',
  'Cherry la Reina del limo busca nuevas experiencias y demostrar que merece su título.',
  'Lisa la Despiadada, motivada por el dinero y la venganza, te seguirá hasta el fin del mundo.',
  // Agrega más textos aquí
];

 let currentIndex = 0;

// Función para mostrar la imagen actual y actualizar el texto
function showImage(index) {
  currentImage.src = images[index];
  imageText.textContent = texts[index];
}

// Mostrar la primera imagen y texto al cargar la página
showImage(currentIndex);

// Evento del botón anterior
prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});

// Evento del botón siguiente
nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});