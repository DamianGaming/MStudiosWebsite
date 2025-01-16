// Maintenance Mode Toggle
const isMaintenance = false; // Toggle maintenance mode here

// Get Elements
const maintenanceMode = document.getElementById('maintenance-mode');
const mainContent = document.getElementById('main-content');
const header = document.getElementById('header');
const footer = document.getElementById('footer');

// Apply Maintenance Mode
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
