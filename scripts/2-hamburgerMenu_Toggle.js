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


// Constant Calls
window.onload = () => {
  // onLoad General
  if (localStorage.getItem('localFavGifs') !== null) {
    localStorageFavsToFavsArray();
    localStorageFavsToFavsArrayCopy();
    if (favoriteGifs.length > 12) {
      slicedArrayOfFavoriteGifs = favoriteGifs.slice(12);
    }
  }
  // onLoad for Favorites
  if (favGifsGridContainer) {
    primaryDisplayOnGrid(favoriteGifs, favGifsGridContainer, 'favFavButton', 'display-block');
    triggerAddFavButtonGif(favFavButton, favoriteGifs, favActiveSearchResults);
    checkIfAreFavoritesSaved();
    showHideVerMasButton(favoriteGifs, verMasFavoritesButtonDOM);
  }
}