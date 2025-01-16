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

  // Expand the log when "Read More" is clicked (if collapsed)
  if (logContent.style.height === "150px" || logContent.style.height === "") {
    logContent.style.height = "auto"; // Expand the log
    readMoreBtn.innerHTML = "Read Less"; // Change button text
  } else {
    logContent.style.height = "150px"; // Collapse the log
    readMoreBtn.innerHTML = "Read More"; // Change button text
  }
}

// Initialize the textboxes in a collapsed state on page load
window.onload = function() {
  var logContentElements = document.querySelectorAll('.solid-box');
  logContentElements.forEach(function(logContent) {
    logContent.style.height = "150px"; // Set default collapsed height for all logs
  });
}
