/** 
 * @function displayHideNavList
 * @desc For Tablet/Mobile screen, toggles the view of Nav Menu, as well as its UIs icons.
 */
let userNavToggleView = document.getElementById('hamburgerMenu');
let navDisplay = document.getElementById('navUl')
const displayHideNavList = () => {
  navDisplay.classList.toggle('showNav');
  userNavToggleView.classList.toggle('showClose')
}
userNavToggleView.addEventListener('click', displayHideNavList);