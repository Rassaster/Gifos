/**
 * @async
 * @function Call-gifsRequest() 
 * @fires Promise If fullfiled, a for-loop will iterate over the array returned by the fetch, adding each element to the DOM, and pushing each element to the arrayTrendingGifsResults array.
 * @const arrayTrendingGifsResults an empty array that will store all the Objects (Gifs) fetched from gifsRequest()
 * @callback trendingGifsResultsToDOM(trendingGifsObject)
 */
requestToGiphy(Giphy_Trending_Node, '', '', Giphy_Results_Limit, 15)
.then((data) => {
  arrayTrendingGifsResults.push(data);
  for (i = 0; i < data.length; i++) {
    displayGifsObjectInGrid(data[i], 'trendingGifoCard', trendingGifsSliderContainer, 'trendingGifoCard-overlay', 'socialTrendingCards-wrapper', 'trendingCardsFavButton', 'favActiveTrending', 'display-none', 'trendingCardsDownloadButton', 'trendingCardsMaxButton');
  }
  triggerAddFavButtonGif(trendingCardsFavButton, arrayTrendingGifsResults[0], favActiveTrending);
  checkInArrayGifsIfAnyIsFavorite(arrayTrendingGifsResults[0], favoriteGifs, favActiveTrending);
  })
  .catch(err => console.error(err));
/**
 * @function addEventListener
 * @description Moves slider carousel to the right.
 * @event click 
 * @listens #
 */
buttonSliderNext.addEventListener('click', () => {
  trendingGifsSliderDOM.scrollLeft += 600;
});
/**
 * @function addEventListener
 * @description Moves slider carousel to the left.
 * @event click 
 * @listens #
 */
buttonSliderPrev.addEventListener('click', () => {
  trendingGifsSliderDOM.scrollLeft -= 600;
});