const triggerAddFavButtonGif = (favButtonClass, sourceArrayToGetGifObject, emptyFavsGrid) => {
  Array.from(favButtonClass).forEach(buttonFav => {
    buttonFav.addEventListener('click', () => {
      let indexOfButton = Array.from(favButtonClass).indexOf(buttonFav);
      alert(indexOfButton);
      favoriteGifs.push(sourceArrayToGetGifObject[indexOfButton]);
      localStorage.localFavGifs = JSON.stringify(favoriteGifs);
      emptyInnerHTMLofElement(favGifsGridContainer);
      primaryDisplayOnGrid(favoriteGifs, favGifsGridContainer);
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