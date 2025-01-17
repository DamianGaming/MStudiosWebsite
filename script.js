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
    readMoreBtn.innerText = "Read Less";
  } else {
    extraNews.style.display = "none";
    readMoreBtn.innerText = "Read More";
  }
}

function toggleLogDetails(logId, btnId) {
  const logContent = document.getElementById(logId);
  const btn = document.getElementById(btnId);

  if (logContent.dataset.expanded === "false") {
    logContent.dataset.expanded = "true";
    btn.innerHTML = "Read Less";
    logContent.innerHTML = logContent.dataset.fullContent; // Show full content
  } else {
    logContent.dataset.expanded = "false";
    btn.innerHTML = "Read More";
    logContent.innerHTML = logContent.dataset.previewContent; // Show only preview
  }
}
