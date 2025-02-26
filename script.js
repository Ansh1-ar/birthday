// script.js
const wishes = document.querySelectorAll('.wish');
const nextButtons = document.querySelectorAll('.next-btn');
let currentWish = 0;

// Function to show the next wish
function showNextWish() {
  wishes[currentWish].classList.remove('active');
  currentWish = (currentWish + 1) % wishes.length;
  wishes[currentWish].classList.add('active');
}

// Add event listeners to buttons
nextButtons.forEach(button => {
  button.addEventListener('click', showNextWish);
});

// Play background music
const backgroundMusic = document.getElementById('background-music');

// Ensure the music plays automatically (some browsers block autoplay)
document.addEventListener('click', () => {
  backgroundMusic.play();
});

// Optional: Start playing music when the page loads
window.onload = () => {
  backgroundMusic.play();
};

// script.js
const container = document.querySelector('.container');
let touchStartX = 0;
let touchEndX = 0;

container.addEventListener('touchstart', (e) => {
  touchStartX = e.touches[0].clientX;
});

container.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].clientX;
  handleSwipe();
});

function handleSwipe() {
  const swipeThreshold = 50; // Minimum swipe distance
  const swipeDistance = touchEndX - touchStartX;

  if (swipeDistance > swipeThreshold) {
    // Swipe right: Go to the previous wish
    showPreviousWish();
  } else if (swipeDistance < -swipeThreshold) {
    // Swipe left: Go to the next wish
    showNextWish();
  }
}

function showPreviousWish() {
  wishes[currentWish].classList.remove('active');
  currentWish = (currentWish - 1 + wishes.length) % wishes.length;
  wishes[currentWish].classList.add('active');
}

function showNextWish() {
  wishes[currentWish].classList.remove('active');
  currentWish = (currentWish + 1) % wishes.length;
  wishes[currentWish].classList.add('active');
}