const emptySearchValue = () => {
  userSearchInput.value = '';
}
const displaySearchTermAsResultsTitle = (term) => {
  userSearchQuery.innerText = term;
}
const addClass = (nodeElement, className) => {
  nodeElement.classList.add(className);
}
const removeClass = (nodeElement, className) => {
  nodeElement.classList.remove(className);
}
const displayAutcompleteSuggestions = () => {
  removeClass(searchButton, 'visibility-hidden');
  removeClass(searchSuggestionsContainer, 'display-none');
  removeClass(closeSearchButton, 'display-none');
  addClass(searchIconhBar, 'display-none')  ;
}
const closeAutocompleteSuggestions = () => {
  removeClass(searchIconhBar, 'display-none');
  addClass(searchButton, 'visibility-hidden');
  addClass(searchSuggestionsContainer, 'display-none');
  addClass(closeSearchButton, 'display-none');
}
const closeRestartSearch = () => {
  emptySearchValue();
  closeAutocompleteSuggestions();
}
const verMasButtonsFunctionality = () => {
  for (i = 0; i < 12; i++) {
    displayGifsObjectInGrid((slicedArrayOfSearchGifsResults[i]), 'searchResultGifCard', searchResultsGifsGridContainer, 'searchResultGifCard-overlay', 'socialSearchResultGifCards-wrapper', 'searchResultsFavButton', 'searchResultsDownloadButton', 'searchResultsMaxButton');
  }
  slicedArrayOfSearchGifsResults = slicedArrayOfSearchGifsResults.slice(12);
}