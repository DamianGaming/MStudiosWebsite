// Maintenance Mode Control
const isMaintenance = false; // Change to true to enable maintenance mode

const maintenanceMode = document.getElementById('maintenance-mode');
const footer = document.querySelector('.footer');

// Enable or disable maintenance mode
if (isMaintenance) {
  maintenanceMode.classList.remove('hidden');
  document.body.style.overflow = 'hidden'; // Disable scrolling
} else {
  maintenanceMode.classList.add('hidden');
  document.body.style.overflow = ''; // Enable scrolling
}

// Footer visibility logic
window.addEventListener('scroll', () => {
  if (!isMaintenance && window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    footer.classList.add('visible');
  } else {
    footer.classList.remove('visible');
  }
});
