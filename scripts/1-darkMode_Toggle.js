toggleDarkMode.addEventListener('click', () => {
  if (localStorage.getItem('darkModestatusLocal') === 'false') {
    localStorage.darkModestatusLocal = true;
    toggleDarkMode.innerText = 'MODO DIURNO';
  } else if (localStorage.getItem('darkModestatusLocal') === 'true') {
    localStorage.darkModestatusLocal = false;
    toggleDarkMode.innerText = 'MODO NOCTURNO';
  }
  triggerToggleDarkMode();
})