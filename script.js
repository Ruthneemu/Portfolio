// Selectors
const navLinks = document.querySelectorAll('nav ul li a');
const heroButton = document.querySelector('.hero-container button');
const projectImages = document.querySelectorAll('#projects img');

// Add event listeners
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Add active class to the clicked link
    link.classList.add('active');
    // Remove active class from other links
    navLinks.forEach(otherLink => {
      if (otherLink !== link) {
        otherLink.classList.remove('active');
      }
    });
  });
});

heroButton.addEventListener('click', () => {
  // Scroll to the about section
  document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
});

projectImages.forEach(image => {
  image.addEventListener('click', () => {
    // Open a modal with the project details
    const modal = document.createElement('div');
    modal.innerHTML = `
      <h2>${image.alt}</h2>
      <p>This is a project description.</p>
    `;
    modal.className = 'modal';
    document.body.appendChild(modal);
  });
});

// Add event listener to close modal
document.addEventListener('click', event => {
  if (event.target.className === 'modal') {
    event.target.remove();
  }
});