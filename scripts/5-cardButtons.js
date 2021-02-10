const triggerAddFavButtonGif = (favButtonClass, sourceArrayToGetGifObject, favActiveClass) => {
  Array.from(favButtonClass).forEach(buttonFav => {
    buttonFav.addEventListener('click', () => {
      let indexOfButton = Array.from(favButtonClass).indexOf(buttonFav);

      // Is NOT favorite:
      if (checkIfIsFavoriteByGifid(sourceArrayToGetGifObject[indexOfButton].id, favoriteGifs) === false || checkIfIsFavoriteByGifid(sourceArrayToGetGifObject[indexOfButton].id, favoriteGifs) === undefined) {
          favoriteGifs.push(sourceArrayToGetGifObject[indexOfButton]);
          slicedArrayOfFavoriteGifs.push(sourceArrayToGetGifObject[indexOfButton]);
          localStorage.localStorageFavGifs = JSON.stringify(favoriteGifs);
          removeClass(favActiveClass[indexOfButton], 'display-none');

          if (favGifsGridContainer) {
            emptyInnerHTMLofElement(favGifsGridContainer);
            primaryDisplayOnGrid(favoriteGifs, favGifsGridContainer, 'favFavButton', 'display-block');
            triggerAddFavButtonGif(favFavButton, favoriteGifs, favActiveSearchResults);
            checkIfAreFavoritesSaved();
          }

          if (favoriteGifs.length > 12) {
            slicedArrayOfFavoriteGifs = favoriteGifs.slice(12);
          }
          showHideVerMasButton(favoriteGifs, verMasFavoritesButtonDOM);
        // It IS favorite:
      } else if (checkIfIsFavoriteByGifid(sourceArrayToGetGifObject[indexOfButton].id, favoriteGifs) === true) {
        let clickedGifId = sourceArrayToGetGifObject[indexOfButton].id;
        for (i = 0; i < favoriteGifs.length; i++) {
          if(clickedGifId === favoriteGifs[i].id) {
            favoriteGifs.splice(i, 1);
            slicedArrayOfFavoriteGifs.splice(i, 1);
          }
        }
        localStorage.localStorageFavGifs = JSON.stringify(favoriteGifs);
        addClass(favActiveClass[indexOfButton], 'display-none');
        if (favGifsGridContainer) {
            emptyInnerHTMLofElement(favGifsGridContainer);
            primaryDisplayOnGrid(favoriteGifs, favGifsGridContainer, 'favFavButton', 'display-block');
            triggerAddFavButtonGif(favFavButton, favoriteGifs, favActiveSearchResults);
            checkIfAreFavoritesSaved();
            for (i = 0; i < arrayTrendingGifsResults[0].length; i++) {
              if(clickedGifId === arrayTrendingGifsResults[0][i].id) {
                addClass(favActiveTrending[i], 'display-none');
              }
            }
        }
        if (favoriteGifs.length > 12) {
          slicedArrayOfFavoriteGifs = favoriteGifs.slice(12);
        }
        showHideVerMasButton(favoriteGifs, verMasFavoritesButtonDOM);
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