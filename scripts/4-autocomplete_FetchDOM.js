/**
 * @description
 * @function addEventListener
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
