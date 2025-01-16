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
// Toggle the "Read More" functionality for the news section
function toggleNews() {
  var extraNews = document.getElementById("extraNews");
  var readMoreBtn = document.getElementById("readMoreBtn");
  
  if (extraNews.style.display === "none") {
    extraNews.style.display = "inline";
    readMoreBtn.innerText = "Read Less";
  } else {
    extraNews.style.display = "none";
    readMoreBtn.innerText = "Read More";
  }
}

// Toggle the "More Details" functionality for each update log
function toggleLogDetails(logId) {
  var logDetails = document.getElementById(logId);
  
  if (logDetails.style.display === "none") {
    logDetails.style.display = "block";
  } else {
    logDetails.style.display = "none";
  }
}
