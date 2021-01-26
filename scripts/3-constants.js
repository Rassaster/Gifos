/**
 * @description Declaration of constants for fetching Trending Gifs to Gihpy.
 * @const Giphy_BaseURL
 * @const Giphy_APIKey
 * @const Giphy_Search_Node 
 * @const Giphy_Trending_Node
 * @const Giphy_Trending_Search_Terms_Node
 * @const Giphy_Search_Query
 * @const Giphy_Trending_Limit
 * @const userSearchInput
 * @const searchButton
 * @const arraySearchGifsResults
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
const arraySearchGifsResults = [];
const arrayTrendingGifsResults = [];
/**
 * @async
 * @function gifsRequest()
 * @param {giphyNode, resultsLimit}
 * @description Launches a request to Giphy's Trending Gifs end point.
 * @returns {array} An array containing the Trending Gifs JSON data received in the request.
 */
const gifsTrendingsRequest = async (giphyNode, resultsLimit = '') => { 
  let response = await fetch(Giphy_BaseURL + giphyNode + Giphy_APIKey + Giphy_Results_Limit);
  let gifObject = await response.json();
  console.log(`${giphyNode} -> ${resultsLimit}:`);
  console.table(gifObject.data);
  return gifObject.data;
}
/**
 * @async
 * @function gifsSearchRequest()
 * @param {giphyNode, searchQuery, resultsLimit}
 * @description Launches a request to Giphy's Search Gifs end point. It listens to the usearSearchInput.value to define the query value.
 * @returns {array} An array containing the Trending Gifs JSON data received in the request.
 */
const gifsSearchRequest = async (giphyNode, searchQuery = '', resultsLimit = '',) => { 
  let response = await fetch(Giphy_BaseURL + giphyNode + Giphy_APIKey + searchQuery + userSearchInput.value + resultsLimit);
  let gifObject = await response.json();
  console.log(`${giphyNode} -> User searched: ${userSearchInput.value} -> ${resultsLimit}:`);
  console.table(gifObject.data);
  return gifObject.data;
}