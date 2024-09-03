// цветное фото при наведении

const seeLinks = document.querySelectorAll(".see");

seeLinks.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    const image = link.closest(".circle").querySelector(".circle-img");
    image.style.filter = "grayscale(0)";
  });

  link.addEventListener("mouseleave", () => {
    const image = link.closest(".circle").querySelector(".circle-img");
    image.style.filter = "grayscale(1)";
  });
});

// слайд-шоу из фото
const images = [
  "./assets/image/IMG_1278.png",
  "./assets/image/IMG_1816.png",
  "./assets/image/IMG_2295.png",
  "./assets/image/IMG_1854.png",
  "./assets/image/IMG_1268.png",
  "./assets/image/IMG_1812.png",
];

let currentIndex = 0;
const slideshow = document.getElementById("slideshow");

// Функция для смены изображения
function changeImage() {
  currentIndex = (currentIndex + 1) % images.length; // Циклически переключаемся по массиву
  slideshow.src = images[currentIndex];
  slideshow.classList.add("active");
  setTimeout(() => {
    slideshow.classList.remove("active");
  }, 500); // Убедитесь, что задержка небольшая, чтобы класс применялся после изменения src
  // slideshow.classList.remove("active"); // Активируем класс для плавного перехода
}

// Запуск смены изображений каждые 3 секунды
setInterval(changeImage, 1000);
