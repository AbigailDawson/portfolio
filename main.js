document.addEventListener('DOMContentLoaded', function () {
  const navbarLinks = document.querySelectorAll('.navbar-nav a');

  window.addEventListener('scroll', () => {
    let currentSection = '';

    // Find the current section based on scroll position
    document.querySelectorAll('section').forEach(section => {
      const sectionTop = section.offsetTop - 50;
      const sectionBottom = section.offsetTop + section.clientHeight - 50;

      if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
        currentSection = section.getAttribute('id');
      }
    });

    // Set active class to the corresponding navbar link
    navbarLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href').substring(1) === currentSection);
    });
  });
});