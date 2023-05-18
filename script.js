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
  'Gabriel, your trusted angel, only with her help can you put an end to Putanas reign',
  'Wendy is a girl who carries the curse of the wendigo, her magical potential has no limits',
  'Cherry the slime Queen seeks new experiences and prove she deserves her title',
  'Lisa the Mercyless, motivated by money and revenge, will follow you to the end of the world',
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