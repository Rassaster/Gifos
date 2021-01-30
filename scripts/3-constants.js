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
 * 
 * @const trendingTerms .trendingTermsDOM DOM Nodes.
 * @const trendingCardsFavButton .trendingCardsFavButton DOM Nodes.
 * @const trendingCardsDownloadButton .trendingCardsDownloadButton DOM Nodes.
 * @const trendingCardsMaxButton .trendingCardsMaxButton

 * @const arraySearchGifsResults [array] Use [0] to acces the array element with data.
 * @var copyOfarraySearchGifsResults [array]
 * @const arrayTrendingGifsResults [array].
 * @var favoriteGifs [array].
 */
const Giphy_BaseURL = "https://api.giphy.com/v1/";
const Giphy_APIKey = "?api_key=33l2FVbyT45wmg6e3MJf38JvhgOSNzdH";
const Giphy_Search_Node = 'gifs/search';
const Giphy_Search_Autocomplete = 'gifs/search/tags';
const Giphy_Trending_Search_Terms_Node = 'trending/searches'
const Giphy_Trending_Node = "gifs/trending";
const Giphy_Search_Query = `&q=`;
const Giphy_Results_Limit = '&limit=';

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
const trendingSearchTermsWrapper = document.getElementById('trendingSearchTermsWrapperDOM');

const trendingTerms = document.getElementsByClassName('trendingTermsDOM');
const trendingCardsFavButton = document.getElementsByClassName('trendingCardsFavButton');
const trendingCardsDownloadButton = document.getElementsByClassName('trendingCardsDownloadButton');
const trendingCardsMaxButton = document.getElementsByClassName('trendingCardsMaxButton');

const arraySearchGifsResults = [];
let copyOfarraySearchGifsResults = [];
const arrayTrendingGifsResults = [];
let favoriteGifs = []
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
 * @function requestToGiphy
 * @param {*} giphyNode 
 * @param {*} searchQuery 
 * @param {*} termQuery 
 * @param {*} resultsLimit 
 * @param {*} limitNum 
 */
const requestToGiphy = async (giphyNode, searchQuery  = "", termQuery = "", resultsLimit = "", limitNum = "") => { 
  let response = await fetch(Giphy_BaseURL + giphyNode + Giphy_APIKey + searchQuery + termQuery + resultsLimit + limitNum);
  let gifObject = await response.json();
  console.log(`Node: ${giphyNode} -> Searched/Typed Term: ${termQuery} -> Results limit: ${resultsLimit}:`);
  console.log(gifObject.data);
  return gifObject.data;
}

