toggleDarkMode.addEventListener('click', () => {
  if (localStorage.getItem('darkModestatusLocal') === 'false') {
    localStorage.darkModestatusLocal = true;
  } else if (localStorage.getItem('darkModestatusLocal') === 'true') {
    localStorage.darkModestatusLocal = false;
  }
  triggerToggleDarkMode();
})