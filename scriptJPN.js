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
  'ヒーロー',
  'あなたの信頼する天使ガブリエル、彼女の助けがあってこそ、プータンの支配に終止符を打つことができるのです。',
  'ウェンディゴの呪いを背負った少女、彼女の魔法の可能性は無限大だ',
  'スライムクイーンのチェリーは、新しい経験を求めて、その称号にふさわしいことを証明します。',
  '金と復讐に突き動かされた慈悲無きリサは、世界の果てまで追いかけてくる',
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