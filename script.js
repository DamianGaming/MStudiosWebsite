// Maintenance Mode Toggle
const isMaintenance = false; // Set to true to enable maintenance mode

// DOM Elements
const maintenanceMode = document.getElementById('maintenance-mode');
const websiteContent = document.getElementById('website-content');

// Toggle Maintenance Mode
if (isMaintenance) {
  maintenanceMode.classList.remove('hidden'); // Show maintenance screen
  websiteContent.classList.add('hidden'); // Hide main website content
} else {
  maintenanceMode.classList.add('hidden'); // Hide maintenance screen
  websiteContent.classList.remove('hidden'); // Show main website content
}
