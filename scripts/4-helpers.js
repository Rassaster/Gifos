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
const toggleClass = (nodeElement, className) => {
  nodeElement.classList.toggle(className;)
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
const closeMaxViewOverlay = () => {
  addClass(maxViewOverlayContainer, 'overlayZero');
  removeClass(maxViewOverlayContainer, 'overlayFullScreen')
  imgMaxGifOverlay.src = ''
}
const showHideVerMasButton = (targetArray, verMasButton) => {
  if (targetArray.length === 0) {
    addClass(verMasButton, 'display-none');
  } else if (targetArray.length > 0) {
    removeClass(verMasButton, 'display-none');
  }
}
const checkIfAreGifsSaved = (sourceArray, gridContainer, noContentContainer) => {
  if (sourceArray.length !== 0) {
    removeClass(gridContainer, 'display-none');
    addClass(noContentContainer, 'display-none');
  } 
  if (sourceArray.length === 0) {
    addClass(gridContainer, 'display-none');
    removeClass(noContentContainer, 'display-none');
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
      }
    }
  })
}
const localStorageFavsToFavsArray = () => {
  let returnedFavsLocal = localStorage.getItem('localStorageFavGifs');
  favoritesToJSON = JSON.parse(returnedFavsLocal);
  arrayOfFavoriteGifs = favoritesToJSON;
}
const localStorageFavsToFavsArrayCopy = () => {
  let returnedFavsLocal = localStorage.getItem('localStorageFavGifs');
  favoritesToJSON = JSON.parse(returnedFavsLocal);
  slicedArrayOfarrayOfFavoriteGifs = favoritesToJSON;
}

const localStorageCreatedGifsToCreatedGifsArray = () => {
  let returnedCreatedLocal = localStorage.getItem('localStorageCreatedGifs');
  createdIDToJSON = JSON.parse(returnedCreatedLocal);
  arrayOfCreatedGifsIDs = createdIDToJSON;
}