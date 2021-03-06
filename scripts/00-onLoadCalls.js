window.onload = () => {
  // onLoad General
  checkDarkModeLocalStorageStatus();
  if (localStorage.getItem('localStorageFavGifs') !== null) {
    localStorageFavsToFavsArray();
    if (arrayOfFavoriteGifs.length > 12) {
      slicedArrayOfarrayOfFavoriteGifs = arrayOfFavoriteGifs.slice(12);
    }
  }
  // onLoad for Favorites
  if (favGifsGridContainer) {
    primaryDisplayOnGrid(arrayOfFavoriteGifs, favGifsGridContainer, 'favFavButton', 'display-block');
    triggerAddFavButtonGif(favFavButton, arrayOfFavoriteGifs, favActiveSearchResults);
    checkIfAreGifsSaved(arrayOfFavoriteGifs, displayFavoritesGridContainer, NoFavoritesContentCcontainer);
    showHideVerMasButton(slicedArrayOfarrayOfFavoriteGifs, verMasFavoritesButtonDOM);
    triggerMaxViewButtonGif(arrayOfFavoriteGifs, searchResultsMaxButton);
    triggerDownloadGif(searchResultsDownloadButton, arrayOfFavoriteGifs);
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
      triggerMaxViewButtonGif(arrayOfCreatedGifsIDs, maxCreatedGifosButton);
      triggerDownloadGif(downloadCreatedGifosButton, arrayOfCreatedGifsIDs);
      triggerDeleteGif();
    }
  }
}