/**
 * @description Declaration of constants for fetching to Giphy, and to further DOM functions.
 * @const Giphy_BaseURL
 * @const Giphy_APIKey
 * @const Giphy_Search_Node 
 * @const Giphy_Trending_Node
 * @const Giphy_Trending_Search_Terms_Node
 * @const Giphy_Search_Query
 * @const Giphy_Trending_Limit
 * @const userSearchInput #searchBar
 * @const searchButton #searchButton-searchBar
 * @const searchResultsContainer #searchResultsContainerDOM
 * @const userSearchQuery #searchResultItemDOM
 * @const arraySearchGifsResults To access the data of Array of Objects refer to index [0]
 * @const arrayTrendingGifsResults
 */
const Giphy_BaseURL = "https://api.giphy.com/v1/";
const Giphy_APIKey = "?api_key=33l2FVbyT45wmg6e3MJf38JvhgOSNzdH";
const Giphy_Search_Node = 'gifs/search';
const Giphy_Trending_Search_Terms_Node = 'trending/searches'
const Giphy_Trending_Node = "gifs/trending";
const Giphy_Search_Query = `&q=`;
const Giphy_Results_Limit = '&limit=48';
const userSearchInput = document.getElementById('searchBar');
const searchButton = document.getElementById('searchButton-searchBar');
const searchResultsContainer = document.getElementById('searchResultsContainerDOM');
const userSearchQuery = document.getElementById('searchResultItemDOM');
const arraySearchGifsResults = [];
const arrayTrendingGifsResults = [];
/**
 *  * @description Declaration of constants containing innerHTML to display Gifs. Used in gifsTrendingsRequest(), gifsSearchRequest()...
 * @const trendingGifCardInnerHTML
 * @const searchGifResultCardInnerHTML
 */

/**
 * @function cleanSearchResults
 * @description cleanSearchResults() Clears the displayed-appended Gif results in DOM and empties the [arraySearchGifsResults]
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
 * @param {giphyNode, searchQuery, resultsLimit}
 * @const Giphy_BaseURL
 * @const Giphy_APIKey
 * @const userSearchInput.value #searchBar.value
 * @consoleLogs String: Node that was Fetched + User's Query + the Results Limit.
 * @tableLogs Array of the JSON data returned as promise is full
 * @returns {array} An array containing the Trending Gifs JSON data received in the request.
 */
const gifsSearchRequest = async (giphyNode, searchQuery = '', resultsLimit = '',) => { 
  let response = await fetch(Giphy_BaseURL + giphyNode + Giphy_APIKey + searchQuery + userSearchInput.value + resultsLimit);
  let gifObject = await response.json();
  console.log(`${giphyNode} -> User searched: ${userSearchInput.value} -> ${resultsLimit}:`);
  console.table(gifObject.data);
  return gifObject.data;
}