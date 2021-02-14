const triggerAddFavButtonGif = (favButtonClass, sourceArrayToGetGifObject, favActiveClass) => {
  Array.from(favButtonClass).forEach(buttonFav => {
    buttonFav.addEventListener('click', () => {
      let indexOfButton = Array.from(favButtonClass).indexOf(buttonFav);

      // Is NOT favorite:
      if (checkIfIsFavoriteByGifid(sourceArrayToGetGifObject[indexOfButton].id, arrayOfFavoriteGifs) === false || checkIfIsFavoriteByGifid(sourceArrayToGetGifObject[indexOfButton].id, arrayOfFavoriteGifs) === undefined) {
          arrayOfFavoriteGifs.push(sourceArrayToGetGifObject[indexOfButton]);
          slicedArrayOfarrayOfFavoriteGifs.push(sourceArrayToGetGifObject[indexOfButton]);
          localStorage.localStorageFavGifs = JSON.stringify(arrayOfFavoriteGifs);
          removeClass(favActiveClass[indexOfButton], 'display-none');

          if (favGifsGridContainer) {
            emptyInnerHTMLofElement(favGifsGridContainer);
            primaryDisplayOnGrid(arrayOfFavoriteGifs, favGifsGridContainer, 'favFavButton', 'display-block');
            triggerAddFavButtonGif(favFavButton, arrayOfFavoriteGifs, favActiveSearchResults);
            checkIfAreGifsSaved(arrayOfFavoriteGifs, displayFavoritesGridContainer, NoFavoritesContentCcontainer);
          }

          if (arrayOfFavoriteGifs.length > 12) {
            slicedArrayOfarrayOfFavoriteGifs = arrayOfFavoriteGifs.slice(12);
          }
          if(favGifsGridContainer) {
            showHideVerMasButton(slicedArrayOfarrayOfFavoriteGifs, verMasFavoritesButtonDOM);
          }
        // It IS favorite:
      } else if (checkIfIsFavoriteByGifid(sourceArrayToGetGifObject[indexOfButton].id, arrayOfFavoriteGifs) === true) {
        let clickedGifId = sourceArrayToGetGifObject[indexOfButton].id;
        for (i = 0; i < arrayOfFavoriteGifs.length; i++) {
          if(clickedGifId === arrayOfFavoriteGifs[i].id) {
            arrayOfFavoriteGifs.splice(i, 1);
            slicedArrayOfarrayOfFavoriteGifs.splice(i, 1);
          }
        }
        localStorage.localStorageFavGifs = JSON.stringify(arrayOfFavoriteGifs);
        addClass(favActiveClass[indexOfButton], 'display-none');
        if (favGifsGridContainer) {
            emptyInnerHTMLofElement(favGifsGridContainer);
            primaryDisplayOnGrid(arrayOfFavoriteGifs, favGifsGridContainer, 'favFavButton', 'display-block');
            triggerAddFavButtonGif(favFavButton, arrayOfFavoriteGifs, favActiveSearchResults);
            checkIfAreGifsSaved(arrayOfFavoriteGifs, displayFavoritesGridContainer, NoFavoritesContentCcontainer);
            for (i = 0; i < arrayTrendingGifsResults[0].length; i++) {
              if(clickedGifId === arrayTrendingGifsResults[0][i].id) {
                addClass(favActiveTrending[i], 'display-none');
              }
            }
        }
        if (arrayOfFavoriteGifs.length > 12) {
          slicedArrayOfarrayOfFavoriteGifs = arrayOfFavoriteGifs.slice(12);
        }
        if (favGifsGridContainer) {
          showHideVerMasButton(slicedArrayOfarrayOfFavoriteGifs, verMasFavoritesButtonDOM);
        }
      }
    })
  })
}
// const triggerMaxViewButtonGif = (favButtonClass, sourceArrayToGetGifObject, favActiveClass, maxViewButtonClass) => {
//   Array.from(maxViewButtonClass).forEach(buttonMaxView => {
//     buttonMaxView.addEventListener('click', () => {
//       let indexOfButton = Array.from(maxViewButtonClass).indexOf(buttonMaxView);
//       removeClass(maxViewOverlayContainer, 'overlayZero');
//       addClass(maxViewOverlayContainer, 'overlayFullScreen');
//       imgMaxGifOverlay.src = sourceArrayToGetGifObject[indexOfButton].images.downsized.url;

//       // It IS favorite:
//       if (checkIfIsFavoriteByGifid(sourceArrayToGetGifObject[indexOfButton].id, arrayOfFavoriteGifs) === true) {

//       }
//     })
//   })
// }

const triggerMaxViewButtonGif = (sourceArrayToGetGifObject, maxViewButtonClass, favButtonClass) => {
  Array.from(maxViewButtonClass).forEach(buttonMaxView => {
    buttonMaxView.addEventListener('click', () => {
      let indexOfButton = Array.from(maxViewButtonClass).indexOf(buttonMaxView);

      removeClass(maxViewOverlayContainer, 'overlayZero');
      addClass(maxViewOverlayContainer, 'overlayFullScreen')
      maxViewOverlayCloseButton.addEventListener('click', closeMaxViewOverlay);
      console.log(sourceArrayToGetGifObject[0][indexOfButton])
      imgMaxGifOverlay.src = sourceArrayToGetGifObject[0][indexOfButton].images.downsized.url;
      userMaxFullGif.innerText = sourceArrayToGetGifObject[0][indexOfButton].username;
      titleMaxFullGif.innerText = sourceArrayToGetGifObject[0][indexOfButton].title;


      // It IS favorite:
      if (checkIfIsFavoriteByGifid(sourceArrayToGetGifObject[indexOfButton].id, arrayOfFavoriteGifs) === true) {

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