const scrollButton = document.querySelector('.scroll-button');

scrollButton.addEventListener('click', function(event) {
  event.preventDefault();
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth'
  });
});

window.addEventListener('scroll', function() {
  const scrollButton = document.querySelector('.scroll-button');
  if (window.pageYOffset > 100) {
    scrollButton.classList.add('visible');
  } else {
    scrollButton.classList.remove('visible');
  }
});