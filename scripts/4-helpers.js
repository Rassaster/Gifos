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

const checkIfFavoritesAreSaved = () => {
  if (favoriteGifs.length !== 0) {
    removeClass(displayFavoritesGridContainer, 'display-none');
    addClass(NoFavoritesContentCcontainer, 'display-none');
  } 
  if (favoriteGifs.length === 0) {
    addClass(displayFavoritesGridContainer, 'display-none');
    removeClass(NoFavoritesContentCcontainer, 'display-none');
  }
}
const checkIfIsFavoriteByGifid = (targetGifid, arrayToSearchIn) => {
  let gifIsFav;
  for (i = 0; i < arrayToSearchIn.length; i++) {
    if(targetGifid === arrayToSearchIn[i].id) {
      return true;
    } else {
      gifIsFav = false;
    }
  }
  return gifIsFav;
}
const checkInArrayGifsIfAnyIsFavorite = (resourceArrayOfGifs, arrayToSearchIn, removeFavClass) => {
  resourceArrayOfGifs.forEach(gif => {
    for (i = 0; i < arrayToSearchIn.length; i++) {
      if (gif.id === arrayToSearchIn[i].id) {
        removeClass(removeFavClass[resourceArrayOfGifs.indexOf(gif)], 'display-none');
        console.log(resourceArrayOfGifs.indexOf(gif))
      }
    }
  })
}
const localStorageFavsToFavsArray = () => {
  let returnedFavsLocal = localStorage.getItem('localFavGifs');
  favoritesToJSON = JSON.parse(returnedFavsLocal)
  favoriteGifs = favoritesToJSON;
}

// Constant Calls
window.onload = () => {
  if (localStorage.getItem('localFavGifs') !== null) {
    localStorageFavsToFavsArray();
  }
  if (favGifsGridContainer) {
    primaryDisplayOnGrid(favoriteGifs, favGifsGridContainer, 'favFavButton', 'display-block');
    triggerAddFavButtonGif(favFavButton, favoriteGifs, favActiveSearchResults);
    checkIfFavoritesAreSaved();
  }
}