const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#site-navigation');
const menuLabel = document.querySelector('.menu-label');

function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
  menuLabel.textContent = 'Åbn menu';
}

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  navigation.classList.toggle('is-open', !isOpen);
  menuLabel.textContent = isOpen ? 'Åbn menu' : 'Luk menu';
});

navigation.addEventListener('click', (event) => {
  if (event.target.matches('a')) {
    closeMenu();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeMenu();
    menuButton.focus();
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 900) {
    closeMenu();
  }
});
