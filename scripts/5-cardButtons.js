/**
 * @function getFavsFromLocal
 */
const getFavsFromLocal = () => {
  let returnedFavsLocal = localStorage.getItem('localFavGifs');
  favoritesToJSON = JSON.parse(returnedFavsLocal)
  console.log(favoritesToJSON)
}

/**
 * @function localFavsToFavsArray
 */
const localFavsToFavsArray = () => {
  let returnedFavsLocal = localStorage.getItem('localFavGifs');
  favoritesToJSON = JSON.parse(returnedFavsLocal)
  favoriteGifs = favoritesToJSON;
}




window.onload = setTimeout(()=>{

    /**
 * @function pushFavGifToArray
 */
Array.from(trendingCardsFavButton).forEach(buttonFav => {
  buttonFav.addEventListener('click', () => {
    let indexOfButton = Array.from(trendingCardsFavButton).indexOf(buttonFav);
    alert(indexOfButton);
    favoriteGifs.push(arrayTrendingGifsResults[0][indexOfButton]);
    localStorage.localFavGifs = JSON.stringify(favoriteGifs);
  })
})


  Array.from(trendingCardsDownloadButton).forEach(buttonDownload => {
    buttonDownload.addEventListener('click', () => {
      let indexOfButton = Array.from(trendingCardsDownloadButton).indexOf(buttonDownload)
      alert(indexOfButton)
    })
  })

  Array.from(trendingCardsMaxButton).forEach(buttonMaxSize => {
    buttonMaxSize.addEventListener('click', () => {
      let indexOfButton = Array.from(trendingCardsMaxButton).indexOf(buttonMaxSize)
      alert(indexOfButton)
    })
  })

  
}, 1000)


// window.onload = () => {
//   localFavsToFavsArray();
//   localStorage.localFavGifs = JSON.stringify(favoriteGifs);
// }