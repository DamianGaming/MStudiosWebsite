// Maintenance Mode Toggle
const isMaintenance = true; // Change this to true to enable maintenance mode

const maintenanceMode = document.getElementById('maintenance-mode');
const mainContent = document.querySelector('main');
const header = document.querySelector('header');
const footer = document.querySelector('footer');

// Toggle Maintenance Mode
if (isMaintenance) {
  maintenanceMode.style.display = 'flex'; // Show maintenance screen
  mainContent.style.display = 'none'; // Hide main content
  header.style.display = 'none'; // Hide header
  footer.style.display = 'none'; // Hide footer
} else {
  maintenanceMode.style.display = 'none'; // Hide maintenance screen
  mainContent.style.display = 'block'; // Show main content
  header.style.display = 'block'; // Show header
  footer.style.display = 'block'; // Show footer
}
