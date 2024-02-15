document.addEventListener('DOMContentLoaded', function () {
  const navbarLinks = document.querySelectorAll('.navbar-nav a');

  window.addEventListener('scroll', () => {
    let currentSection = '';

    document.querySelectorAll('section').forEach(section => {
      const sectionTop = section.offsetTop - 50;
      const sectionBottom = section.offsetTop + section.clientHeight - 50;

      if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
        currentSection = section.getAttribute('id');
      }
    });

    navbarLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href').substring(1) === currentSection);
    });
  });
});

function submitForm(event) {
  event.preventDefault();
  const form = document.getElementById("contactForm");
  const formData = new FormData(form);

  fetch(form.action, {
    method: form.method,
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
}