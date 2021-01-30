const emptySearchValue = () => {
  userSearchInput.value = '';
}
const displaySearchTermAsResultsTitle = (term) => {
  userSearchQuery.innerText = term;
}
const displayAutcompleteSuggestions = () => {
  searchButton.classList.remove('visibility-hidden');
  searchSuggestionsContainer.classList.remove('display-none');
  searchIconhBar.classList.add('display-none');
  closeSearchButton.classList.remove('display-none');
}
const closeAutocompleteSuggestions = () => {
  searchButton.classList.add('visibility-hidden');
  searchSuggestionsContainer.classList.add('display-none');
  searchIconhBar.classList.remove('display-none')
  closeSearchButton.classList.add('display-none');
}
const closeRestartSearch = () => {
  emptySearchValue();
  closeAutocompleteSuggestions();
}
const verMasButtonsFunctionality = () => {
  for (i = 0; i < 12; i++) {
    searchGifsResultsToDOM(copyOfarraySearchGifsResults[i]);
  }
  copyOfarraySearchGifsResults = copyOfarraySearchGifsResults.slice(12);
}