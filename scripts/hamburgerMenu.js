/** 
 * @function displayHideNavList
 * @
 * 
*/
let userNavToggleView = document.getElementById('hamburgerMenu');
let navDisplay = document.getElementById('navUl')
let hamburgerIconNav = document.getElementsByClassName('fa-bars')[0];
let closeIconNav = document.getElementsByClassName('fa-times')[0];
const displayHideNavList = () => {
  navDisplay.classList.toggle('flexContainer');
  if (hamburgerIconNav.style.display === '' || hamburgerIconNav.style.display === 'block') {
    hamburgerIconNav.style.display = 'none';
  } else if (hamburgerIconNav.style.display === 'none')  {
    hamburgerIconNav.style.display = 'block';
  }
  if (closeIconNav.style.display === '' || closeIconNav.style.display === 'none') {
    closeIconNav.style.display = 'block';
  } else if (closeIconNav.style.display === 'block')  {
    closeIconNav.style.display = 'none';
  }
}
userNavToggleView.addEventListener('change', displayHideNavList);
