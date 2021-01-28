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
      displayAutcompleteSuggestions();
    } else {
      closeAutocompleteSuggestions();
    }
  }
);
/**
 * @function listenToAutocompleteSuggestions
 * @fires .forEach()
 * @function addEventListener
 * @event click
 * @listens  
 * @description Listens to the .searchSuggestionTerm-wrapper class, converts the {HTML Object} to an [Array] and applies the Array.forEach() method to create the addEventListener('click') on every class element. Finally, once the 'click'is made, the suggested term is setted as the searchBar.value and fires de triggerSearch().
 * @const suggestedTerm string.
 * @const userSearchInput .value property of #searchBar
 * @const triggerSearch function.
 */
const listenToAutocompleteSuggestions = () => {
  Array.from(autocompleteSuggestionTermsWrapper).forEach(termWrapper => {
    termWrapper.addEventListener('click', () => {
      let suggestedTerm = termWrapper.firstChild.innerText;
      userSearchInput.value = suggestedTerm;
      triggerSearch();
    })
  });
}
/**
 * @function triggerAutocomplete
 * @fires gifsSearchAutocomplete() Fetch. If fullfiled: First, iterates with a for-loop  over the Array of Objects returned by the fetch and calls autocompleteSuggestionToDOM( over each element. Then calls listenToAutocompleteSuggestions().
 * @const autocompleteSuggestionToDOM Function.
 * @const listenToAutocompleteSuggestions Function
 * @throws
*/
const triggerAutocomplete = () => {
  gifsSearchAutocomplete()
    .then((data) => {
      for (i = 0; i < data.length; i++) {
        autocompleteSuggestionToDOM(data[i]);
      }
      listenToAutocompleteSuggestions();
    })
    .catch(err => console.error(err));
}
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
 * @function addEventListener
 * @event input 
 * @listens #searchButton-searchBar const = searchButton;
 * @param {event, callBack()}
 * @callback anonymous() Calls cleanSearchResults() and triggerSearch().
 * @const cleanSearchResults Function.
 * @const triggerSearch Function.
 */
userSearchInput.addEventListener('input', ()=>{
  cleanAutocompleteSuggestions();
  triggerAutocomplete();
})