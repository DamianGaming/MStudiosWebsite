// Set this variable to enable or disable maintenance mode.
const isMaintenance = false;

const maintenanceMode = document.getElementById('maintenance-mode');
const footer = document.querySelector('.footer');

// Activate maintenance mode if enabled
if (isMaintenance) {
  maintenanceMode.classList.remove('hidden');
  document.body.style.overflow = 'hidden'; // Prevent scrolling while in maintenance mode
} else {
  maintenanceMode.classList.add('hidden');
  document.body.style.overflow = ''; // Allow scrolling
}

// Show footer only when at the bottom of the page
window.addEventListener('scroll', () => {
  if (!isMaintenance && window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    footer.classList.add('visible');
  } else {
    footer.classList.remove('visible');
  }
});
