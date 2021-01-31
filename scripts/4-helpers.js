const emptySearchValue = () => {
  userSearchInput.value = '';
}
const emptyInnerHTMLofElement = (DOMNodeElement) => {
  DOMNodeElement.innerHTML = '';
}
const emptyArray = (array) => {
  array.splice(0, array.length)
}
const sliceArray = (array, untillNumIndex) => {
  array.slice(untillNumIndex)
}
const cleanSearchResults = () => {
  emptyInnerHTMLofElement(searchResultsGifsGridContainer);
  emptyArray(arraySearchGifsResults);
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
  addClass(searchIconBar, 'display-none')  ;
}
const closeAutocompleteSuggestions = () => {
  removeClass(searchIconBar, 'display-none');
  addClass(searchButton, 'visibility-hidden');
  addClass(searchSuggestionsContainer, 'display-none');
  addClass(closeSearchButton, 'display-none');
}
const closeRestartSearch = () => {
  emptySearchValue();
  closeAutocompleteSuggestions();
}


const localStorageFavsToFavsArray = () => {
  let returnedFavsLocal = localStorage.getItem('localFavGifs');
  favoritesToJSON = JSON.parse(returnedFavsLocal)
  favoriteGifs = favoritesToJSON;
}

// Constant Calls
window.onload = () => {
  if (localStorage.getItem('localFavGifs') !== null) {
    // alert('local is here')
    localStorageFavsToFavsArray();
  }
  if (favGifsGridContainer) {
    primaryDisplayOnGrid(favoriteGifs, favGifsGridContainer);
  }

}