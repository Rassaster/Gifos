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
  navDisplay.classList.toggle('showNav');
  userNavToggleView.classList.toggle('showClose')
}
userNavToggleView.addEventListener('click', displayHideNavList);
