// script.js
const wishes = document.querySelectorAll('.wish');
const nextButtons = document.querySelectorAll('.next-btn');
let currentWish = 0;

// Function to show the next wish
function showNextWish() {
  wishes[currentWish].classList.remove('active');
  currentWish = (currentWish + 1) % wishes.length;
  wishes[currentWish].classList.add('active');

  // Add floating emojis for Wish 5
  if (currentWish === 4) { // Wish 5 is index 4
    createFloatingEmojis();
  }
}

// Function to show the previous wish
function showPreviousWish() {
  wishes[currentWish].classList.remove('active');
  currentWish = (currentWish - 1 + wishes.length) % wishes.length;
  wishes[currentWish].classList.add('active');
}

// Function to create floating emojis
function createFloatingEmojis() {
  const emojis = ['🫶🏻', '🛐', '❤️'];
  const emojiContainer = document.querySelector('.emoji-container');

  // Clear existing emojis (if any)
  emojiContainer.innerHTML = '';

  // Create and append emojis
  for (let i = 0; i < 100; i++) { // Increase the number of emojis for a denser effect
    const emojiElement = document.createElement('div');
    emojiElement.classList.add('floating-emoji');
    emojiElement.textContent = emojis[Math.floor(Math.random() * emojis.length)]; // Randomly select an emoji

    // Randomize horizontal position
    emojiElement.style.left = `${Math.random() * 100}%`;

    // Randomize animation duration and delay
    emojiElement.style.animationDuration = `${Math.random() * 3 + 2}s`;
    emojiElement.style.animationDelay = `${Math.random() * 2}s`;

    emojiContainer.appendChild(emojiElement);
  }
}

// Add event listeners to buttons
nextButtons.forEach(button => {
  button.addEventListener('click', showNextWish);
});

// Swipe gestures for mobile
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
