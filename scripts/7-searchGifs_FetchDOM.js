/**
 * @function triggerSearch
 * @fires requestToGiphy() Fetch. If fullfiled: 
 * 1. pushes the Array of Objects returned by the fetch  to the [arraySearchGifsResults] as a new element. To access this data use index [0]; 
 * 2. Iterates with a for-loop through the first 12 elements and calls searchGifsResultsToDOM() on each element to add each Gif to the Results Grid.
 * 3. Sets the value of [copyOfarraySearchGifsResults] by slicing the first 12 elements of [arrayTrendingGifsResults].
 * 4. Calls closeAutocompleteSuggestions().
 * 5. Calls closeRestartSearch().
 * @const requestToGiphy Function.
 * @const arraySearchGifsResults [Array] that will store all the data returned from fetch gifsRequest() as a new element. To access Object data, refer to index [0].
 * @const copyOfarraySearchGifsResults [Array].
 * @const searchGifsResultsToDOM Function.
 * @const closeAutocompleteSuggestions Function.
 * @const closeRestartSearch Function.
 * @throws
 */
const triggerSearch = (searchTerm) => {
  requestToGiphy(Giphy_Search_Node, Giphy_Search_Query, searchTerm, Giphy_Results_Limit, 48)
  .then((data) => {
    cleanSearchResults();
    displaySearchTermAsResultsTitle(searchTerm);
    arraySearchGifsResults.push(data);
    slicedArrayOfSearchGifsResults = arraySearchGifsResults[0].slice(12);

    if (arraySearchGifsResults[0].length <= 12) {
      for (i = 0; i < arraySearchGifsResults[0].length; i++) {
        displayGifsObjectInGrid((arraySearchGifsResults[0][i]), 'searchResultGifCard', searchResultsGifsGridContainer, 'searchResultGifCard-overlay', 'socialSearchResultGifCards-wrapper', 'searchResultsFavButton', 'searchResultsDownloadButton', 'searchResultsMaxButton', removeClass(searchResultsContainer, 'display-none'))
      }
    } else {
      for (i = 0; i < 12; i++) {
        displayGifsObjectInGrid((arraySearchGifsResults[0][i]), 'searchResultGifCard', searchResultsGifsGridContainer, 'searchResultGifCard-overlay', 'socialSearchResultGifCards-wrapper', 'searchResultsFavButton', 'searchResultsDownloadButton', 'searchResultsMaxButton', removeClass(searchResultsContainer, 'display-none'))
      }
    }
    closeRestartSearch();
  })
  .catch(err => console.error(err));
}
/**
 * @function addEventListener
 * @event click on searchButton = #searchButton
 * @listens #searchButton-searchBar const = searchButton;
 * @param {event, callBack()}
 * @callback anonymous() Calls triggerSearch().
 * @const triggerSearch Function.
 */
searchButton.addEventListener('click', ()=>{
  triggerSearch(userSearchInput.value);
})
/**
 * @function addEventListener()
 * @event keypress "Enter"
 * @listens #searchBar const = userSearchInput;
 * @param {event, callBack(event)}
 * @callback anonymous(event) First, checks if the 'keypress' equals the Enter key. Then, calls triggerSearch().
 * @const triggerSearch Function.
 */
userSearchInput.addEventListener('keypress', event => {
  if (event.keyCode === 13) {
    triggerSearch(userSearchInput.value);
  }
})
/**
 * @function addEventListener
 * @event click on const searchCloseSuggestions = #closeButton-searchBar
 * @listens #closeButton-searchBar
 */
closeSearchButton.addEventListener('click', closeRestartSearch);
/**
 * @function addEventListener
 * @event click on const searchCloseSuggestions = #closeButton-searchBar
 * @listens #closeButton-searchBar
 */
verMasSearchResultsButtonDOM.addEventListener('click', verMasButtonsFunctionality)