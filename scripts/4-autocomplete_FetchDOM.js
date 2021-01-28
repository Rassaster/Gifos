/**
 * @function addEventListener
 * @description
 * @event input on #searchBar.value
 * @listens  #searchBar const = userSearchInput
 * @param {} 
 * @callback anonymous()
 * @fires .remove()
 * @fires .add()
 * @constant userSearchInput #searchBar DOM Node
 * @const searchSuggestionsContainer #searchSuggestionsContainerDOM DOM Node
 * @const searchIconBar #searchIcon-searchBar DOM Node
 * @const searchCloseSuggestions #closeButton-searchBar DOM Node
 */
userSearchInput.addEventListener('input', () => {
    if (userSearchInput.value !== '') { 
      searchButton.classList.remove('visibility-hidden');
      searchSuggestionsContainer.classList.remove('display-none');
      searchIconhBar.classList.add('display-none');
      searchCloseSuggestions.classList.remove('display-none');
    } else {
      searchButton.classList.add('visibility-hidden');
      searchSuggestionsContainer.classList.add('display-none');
      searchIconhBar.classList.remove('display-none')
      searchCloseSuggestions.classList.add('display-none');
    }
  }
);
/**
 * @function autocompleteSuggestionToDOM
 * @description
 * @param {array} autocompleteSuggestionObject
 * @var autocompleteTermSuggestion {termData}[name]
 * @var searchSuggestionsContainer #searchSuggestionsContainerDOM DOM Node
 * @var searchSuggestionWrapper <div> new Node Element
 * @var searchTermSuggestion <p> new Node Element
 * @fires  @fires .appendChild(.createElement.(createElement.innerText)
 */
const autocompleteSuggestionToDOM = (autocompleteSuggestionObject) => {
  let autocompleteTermSuggestion = autocompleteSuggestionObject.name;

  let searchSuggestionsContainer = document.getElementById('searchSuggestionsContainerDOM');
  let searchSuggestionWrapper = document.createElement('div');
  searchSuggestionWrapper.classList.add('flexContainer');
  searchSuggestionWrapper.classList.add('searchSuggestionTerm-wrapper');
  searchTermSuggestion = document.createElement('p');
  searchTermSuggestion.classList.add('termSuggestion');
  searchTermSuggestion.innerText = autocompleteTermSuggestion
  // searchSuggestionWrapper.innerHTML = `<p class="termSuggestion">${autocompleteTermSuggestion}</p>`;
  searchSuggestionWrapper.appendChild(searchTermSuggestion);
  searchSuggestionsContainer.appendChild(searchSuggestionWrapper);
}
/**
 * @description
 */
userSearchInput.addEventListener('input', ()=>{
  cleanAutocompleteSuggestions();
  gifsSearchAutocomplete(Giphy_Search_Autocomplete)
    .then((data) => {
      for (i = 0; i < data.length; i++) {
        autocompleteSuggestionToDOM(data[i]);
        arrayAutocompleteSuggestions.push(data[i])
      }
    })
    .catch(err => console.error(err));
})