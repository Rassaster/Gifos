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
  if (localStorage.getItem('localStorageFavGifs') !== null) {
    localStorageFavsToFavsArray();
    localStorageFavsToFavsArrayCopy();
    if (favoriteGifs.length > 12) {
      slicedArrayOfFavoriteGifs = favoriteGifs.slice(12);
    }
  } else {
    console.log('No favs.')
  }
  // onLoad for Favorites
  if (favGifsGridContainer) {
    primaryDisplayOnGrid(favoriteGifs, favGifsGridContainer, 'favFavButton', 'display-block');
    triggerAddFavButtonGif(favFavButton, favoriteGifs, favActiveSearchResults);
    checkIfAreFavoritesSaved();
    showHideVerMasButton(favoriteGifs, verMasFavoritesButtonDOM);
    
    verMasFavoritesButtonDOM.addEventListener('click', () => {
      triggerVerMasFavoritesButton();
    })
  }
  if (createdGifsGridDOM){
    if (localStorage.getItem('localStorageCreatedGifs') !== null) {
      localStorageCreatedGifsToCreatedGifsArray();
      // must replace function bellow with primaryDisplayCreatedGifsOnGrid()
      displayCreatedGifsObjectInGrid(arrayOfCreatedGifsIDs[0], createdGifsGridDOM);
    }
  }
}