/**
 * @description Declaration of constants for fetching to Giphy, and to further DOM functions.
 * @const Giphy_BaseURL string.
 * @const Giphy_APIKey string.
 * @const Giphy_Search_Node string.
 * @const Giphy_Search_Autocomplete string.
 * @const Giphy_Trending_Node string.
 * @const Giphy_Trending_Search_Terms_Node string.
 * @const Giphy_Search_Query string.
 * @const Giphy_Trending_Limit string.
 * @const userSearchInput #searchBar DOM Node.
 * @const searchIconBar #searchIcon-searchBar DOM Node.
 * @const closeSearchButton #closeButton-searchBar DOM Node.
 * @const searchSuggestionsContainer #searchSuggestionsContainerDOM DOM Node.
 * @const autocompleteSuggestionTermsWrapper .searchSuggestionTerm-wrapper DOM Node.
 * @const searchButton #searchButton-searchBar DOM Node.
 * @const searchResultsContainer #searchResultsContainerDOM DOM Node.
 * @const userSearchQuery #searchResultItemDOM DOM Node.
 * @const verMasSearchResultsButton #verMasSearchResultsButtonDOM DOM Node.
 * @const trendingSearchTermsWrapper #trendingSearchTermsWrapperDOM DOM Node.
 * @const trendingGifsSliderContainer #trendingGifsSliderDOM DOM Node.
 * @const buttonSliderNext #trendingRightButtonSlider DOM Node.
 * @const buttonSliderPrev #trendingLefttButtonSlider DOM Node.
 * @const trendingTerms .trendingTermsDOM DOM Nodes.
 * @const arraySearchGifsResults [array] Use [0] to acces the array element with data.
 * @const copyOfarraySearchGifsResults [array]
 * @const arrayTrendingGifsResults [array].
 */
const Giphy_BaseURL = "https://api.giphy.com/v1/";
const Giphy_APIKey = "?api_key=33l2FVbyT45wmg6e3MJf38JvhgOSNzdH";
const Giphy_Search_Node = 'gifs/search';
const Giphy_Search_Autocomplete = 'gifs/search/tags';
const Giphy_Trending_Search_Terms_Node = 'trending/searches'
const Giphy_Trending_Node = "gifs/trending";
const Giphy_Search_Query = `&q=`;
const Giphy_Results_Limit = '&limit=48';
const userSearchInput = document.getElementById('searchBar');
const searchIconhBar= document.getElementById('searchIcon-searchBar');
const closeSearchButton = document.getElementById('closeButton-searchBar');
const searchSuggestionsContainer = document.getElementById('searchSuggestionsContainerDOM');
const autocompleteSuggestionTermsWrapper = document.getElementsByClassName('searchSuggestionTerm-wrapper');
const trendingGifsSliderContainer = document.getElementById('trendingGifsSliderDOM');
const buttonSliderNext = document.getElementById('trendingRightButtonSlider');
const buttonSliderPrev = document.getElementById('trendingLefttButtonSlider');
const searchButton = document.getElementById('searchButton-searchBar');
const searchResultsContainer = document.getElementById('searchResultsContainerDOM');
const userSearchQuery = document.getElementById('searchResultItemDOM');
const verMasSearchResultsButton = document.getElementById('verMasSearchResultsButtonDOM');
const trendingSearchTermsWrapper = document.getElementById('trendingSearchTermsWrapperDOM')

const trendingTerms = document.getElementsByClassName('trendingTermsDOM');
const arraySearchGifsResults = [];
let copyOfarraySearchGifsResults = [];
const arrayTrendingGifsResults = [];
/**
 * @function cleanSearchResults
 * @description Clears the displayed-appended Gif results in DOM and empties the [arraySearchGifsResults]
 * @param {}
 * @var resultsGifsGridContainer #searchResultsGifsGridDOM
 * @var arraySearchGifsResults [Array] that will store all the data returned from fetch gifsRequest() as a new element. To access Object data, refer to index [0].
 */
const cleanSearchResults = () => {
  let resultsGifsGridContainer = document.getElementById('searchResultsGifsGridDOM');
  resultsGifsGridContainer.innerHTML = '';
  arraySearchGifsResults.splice(0, arraySearchGifsResults.length);
}
/**
 * @function cleanAutocompleteSuggestions
 * @description Clears the displayed autocomplete suggested terms in DOM.
 * @var searchSuggestionsContainer #searchSuggestionsContainerDOM DOM Node.
 */
const cleanAutocompleteSuggestions = () => {
  let searchSuggestionsContainer = document.getElementById('searchSuggestionsContainerDOM');
  searchSuggestionsContainer.innerHTML = '';
}
/**
 * @function gifsTrendingsRequest()
 * @description Launches a request to Giphy. It works for Giphy_Trending_Node and Giphy_Trending_Search_Terms_Node.
 * @async
 * @param {giphyNode, resultsLimit = ''}
 * @const Giphy_BaseURL
 * @const Giphy_APIKey
 * @consoleLogs String: Node that was Fetched +  Results Limit.
 * @tableLogs Array of the JSON data returned as promise is full
 * @returns {array} Containing the Trending Gifs JSON data received from the request.
 */
const gifsTrendingsRequest = async (giphyNode, resultsLimit = '') => { 
  let response = await fetch(Giphy_BaseURL + giphyNode + Giphy_APIKey + Giphy_Results_Limit);
  let gifObject = await response.json();
  console.log(`${giphyNode} -> ${resultsLimit}:`);
  console.table(gifObject.data);
  return gifObject.data;
}
/**
 * @function gifsSearchRequest()
 * @description Launches a request to Giphy_Search_Node with the query submitted by User.
 * @async
 * @param {termQuery}
 * @const Giphy_BaseURL
 * @const Giphy_APIKey
 * @const userSearchInput.value #searchBar.value DOM Node
 * @consoleLogs String: Node that was Fetched + User's Query + the Results Limit.
 * @tableLogs Array of the JSON data returned as promise is fullfiled.
 * @returns {array} An array containing the Trending Gifs JSON data received in the request.
 */
const gifsSearchRequest = async (termQuery) => { 
  let response = await fetch(Giphy_BaseURL + Giphy_Search_Node + Giphy_APIKey + Giphy_Search_Query + termQuery + Giphy_Results_Limit);
  let gifObject = await response.json();
  console.log(`User searched: ${termQuery} -> ${Giphy_Results_Limit}:`);
  console.table(gifObject.data);
  return gifObject.data;
}
/**
 * @function gifsSearchAutocomplete
 * @description
 * @async
 * @const Giphy_BaseURL
 * @const Giphy_Search_Autocomplete
 * @const Giphy_APIKey
 * @const Giphy_Search_Query
 * @const userSearchInput.value #searchBar.value DOM
 * @consoleLogs String: Node that was Fetched + 'User typed' + serSearchInput.value.
 * @tableLogs Array of the JSON data returned as promise is fullfiled.
 * @returns {array} An array containing the Trending Gifs JSON data received in the request.
 */
const gifsSearchAutocompleteRequest = async () => { 
  let response = await fetch(Giphy_BaseURL + Giphy_Search_Autocomplete + Giphy_APIKey + Giphy_Search_Query + userSearchInput.value);
  let gifObject = await response.json();
  console.log(`Autocomplete -> User typed: ${userSearchInput.value}: `);
  console.table(gifObject.data);
  return gifObject.data;
}
// ***************************************************************************************
// ++++++++++++++++++++++++++++++++++++++++HELPERS++++++++++++++++++++++++++++++++++++++++
// ****************************************HELPERS****************************************
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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