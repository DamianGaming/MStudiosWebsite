// Handle footer visibility on scroll
window.addEventListener('scroll', function () {
  const footer = document.querySelector('.footer');
  const scrollPosition = window.innerHeight + window.scrollY;
  const documentHeight = document.documentElement.offsetHeight;

  if (scrollPosition >= documentHeight) {
    footer.classList.add('show');  // Show footer when at the bottom
  } else {
    footer.classList.remove('show');  // Hide footer when not at the bottom
  }
});
function toggleNews() {
  var extraNews = document.getElementById("extraNews");
  var readMoreBtn = document.getElementById("readMoreBtn");

  if (extraNews.style.display === "none") {
    extraNews.style.display = "inline";
    readMoreBtn.innerHTML = "Read Less";
  } else {
    extraNews.style.display = "none";
    readMoreBtn.innerHTML = "Read More";
  }
}

function toggleLogDetails(logId) {
  var logContent = document.getElementById(logId);
  var readMoreBtn = document.querySelector(`#${logId} + .btn`);

  // Start with the text boxes collapsed (height = 150px)
  if (logContent.style.height === "150px" || logContent.style.height === "") {
    logContent.style.height = "auto"; // Expand to show full content
    readMoreBtn.innerHTML = "Read Less";
  } else {
    logContent.style.height = "150px"; // Collapse to the default height
    readMoreBtn.innerHTML = "Read More";
  }
}

// Initialize the textboxes in a collapsed state
window.onload = function() {
  var logContentElements = document.querySelectorAll('.solid-box');
  logContentElements.forEach(function(logContent) {
    logContent.style.height = "150px"; // Collapse all log text areas on page load
  });
}
