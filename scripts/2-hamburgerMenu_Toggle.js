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
    // localStorageFavsToFavsArrayCopy();
    if (arrayOfFavoriteGifs.length > 12) {
      slicedArrayOfarrayOfFavoriteGifs = arrayOfFavoriteGifs.slice(12);
    }
  } else {
    console.log('No favs.')
  }
  // onLoad for Favorites
  if (favGifsGridContainer) {
    primaryDisplayOnGrid(arrayOfFavoriteGifs, favGifsGridContainer, 'favFavButton', 'display-block');
    triggerAddFavButtonGif(favFavButton, arrayOfFavoriteGifs, favActiveSearchResults);
    checkIfAreGifsSaved(arrayOfFavoriteGifs, displayFavoritesGridContainer, NoFavoritesContentCcontainer);
    showHideVerMasButton(slicedArrayOfarrayOfFavoriteGifs, verMasFavoritesButtonDOM);
    
    verMasFavoritesButtonDOM.addEventListener('click', () => {
      triggerVerMasFavoritesButton();
    })
  }
  // onLoad for Created Gifs
  if (createdGifsGridDOM || videoCameraView) {
    if (localStorage.getItem('localStorageCreatedGifs') !== null) {
      localStorageCreatedGifsToCreatedGifsArray();
      if (arrayOfCreatedGifsIDs.length > 12) {
        slicedArrayOfCreatedGifs = arrayOfCreatedGifsIDs.slice(12);
      }
    }
    if (createdGifsGridDOM) {
      primaryDisplayCreatedGifsOnGrid(arrayOfCreatedGifsIDs, createdGifsGridDOM);
      checkIfAreGifsSaved(arrayOfCreatedGifsIDs, displayCreatedGifsGridContainer, noCreatedGifsContentContainer);
      showHideVerMasButton(slicedArrayOfCreatedGifs, myGifosMasButton);
      myGifosMasButton.addEventListener('click', triggerVerMasCreatedGifsButton);
    }
  }
}