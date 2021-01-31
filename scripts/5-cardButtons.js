const triggerAddFavButtonGif = (favButtonClass, sourceArrayToGetGifObject) => {
  Array.from(favButtonClass).forEach(buttonFav => {
    buttonFav.addEventListener('click', () => {
      let indexOfButton = Array.from(favButtonClass).indexOf(buttonFav);
      let gifIsFavorite = checkIfIsFavoriteByGifid(sourceArrayToGetGifObject[indexOfButton].id, favoriteGifs)

      if (gifIsFavorite === false || gifIsFavorite === undefined) {
        favoriteGifs.push(sourceArrayToGetGifObject[indexOfButton]);
        localStorage.localFavGifs = JSON.stringify(favoriteGifs);
        emptyInnerHTMLofElement(favGifsGridContainer);
        primaryDisplayOnGrid(favoriteGifs, favGifsGridContainer);
      }
      if (gifIsFavorite === true) {
        alert('Is already your favorite!')
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