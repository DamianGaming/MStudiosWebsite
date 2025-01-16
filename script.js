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
  const extraNews = document.getElementById("extraNews");
  const readMoreBtn = document.getElementById("readMoreBtn");

  if (extraNews.style.display === "none") {
    extraNews.style.display = "inline";
    readMoreBtn.innerHTML = "Read Less";
  } else {
    extraNews.style.display = "none";
    readMoreBtn.innerHTML = "Read More";
  }
}

function toggleLogDetails(logId) {
  const logContent = document.getElementById(logId);
  const btn = logContent.nextElementSibling;

  if (logContent.style.height === "200px") {
    logContent.style.height = "auto";
    btn.innerHTML = "Read Less";
  } else {
    logContent.style.height = "200px";
    btn.innerHTML = "Read More";
  }
}
