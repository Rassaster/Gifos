const triggerAddFavButtonGif = (favButtonClass, sourceArrayToGetGifObject, favActiveClass) => {
  Array.from(favButtonClass).forEach(buttonFav => {
    buttonFav.addEventListener('click', () => {
      let indexOfButton = Array.from(favButtonClass).indexOf(buttonFav);

      // Is NOT favorite:
      if (checkIfIsFavoriteByGifid(sourceArrayToGetGifObject[indexOfButton].id, favoriteGifs) === false || checkIfIsFavoriteByGifid(sourceArrayToGetGifObject[indexOfButton].id, favoriteGifs) === undefined) {
          favoriteGifs.push(sourceArrayToGetGifObject[indexOfButton]);
          localStorage.localFavGifs = JSON.stringify(favoriteGifs);
          removeClass(favActiveClass[indexOfButton], 'display-none');

          if (favGifsGridContainer) {
            emptyInnerHTMLofElement(favGifsGridContainer);
            primaryDisplayOnGrid(favoriteGifs, favGifsGridContainer, 'favFavButton', 'display-block');
            triggerAddFavButtonGif(favFavButton, favoriteGifs, favActiveSearchResults);
            checkIfFavoritesAreSaved();
          }
        // It IS favorite:
        } else if (checkIfIsFavoriteByGifid(sourceArrayToGetGifObject[indexOfButton].id, favoriteGifs) === true) {
          for (i = 0; i < favoriteGifs.length; i++) {
            if(sourceArrayToGetGifObject[indexOfButton].id === favoriteGifs[i].id) {
              favoriteGifs.splice(i, 1);
            }
          }
          localStorage.localFavGifs = JSON.stringify(favoriteGifs);
          addClass(favActiveClass[indexOfButton], 'display-none');
          if (favGifsGridContainer) {
            emptyInnerHTMLofElement(favGifsGridContainer);
            primaryDisplayOnGrid(favoriteGifs, favGifsGridContainer, 'favFavButton', 'display-block');
            triggerAddFavButtonGif(favFavButton, favoriteGifs, favActiveSearchResults);
            checkIfFavoritesAreSaved();
          }
      }
    })
  })
}

// window.onload = setTimeout(()=>{

//   Array.from(trendingCardsDownloadButton).forEach(buttonDownload => {
//     buttonDownload.addEventListener('click', () => {
//       let indexOfButton = Array.from(trendingCardsDownloadButton).indexOf(buttonDownload)
//       alert(indexOfButton)
//     })
//   })

//   Array.from(trendingCardsMaxButton).forEach(buttonMaxSize => {
//     buttonMaxSize.addEventListener('click', () => {
//       let indexOfButton = Array.from(trendingCardsMaxButton).indexOf(buttonMaxSize)
//       alert(indexOfButton)
//     })
//   })

  
// }, 1000)