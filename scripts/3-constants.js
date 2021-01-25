/**
 * @description Declaration of constants for fetching Trending Gifs to Gihpy.
 * @const Giphy_BaseURL
 * @const Giphy_APIKey
 * @const Giphy_Search_Node 
 * @const Giphy_Trending_Node
 * @const Giphy_Trending_Search_Terms_Node
 * @const Giphy_Search_Query
 * @const Giphy_Trending_Limit
 * @const arrayTrendingGifsResults
 */
const Giphy_BaseURL = "https://api.giphy.com/v1/";
const Giphy_APIKey = "?api_key=33l2FVbyT45wmg6e3MJf38JvhgOSNzdH";
const Giphy_Search_Node = 'gifs/search';
const Giphy_Trending_Search_Terms_Node = 'trending/searches'
const Giphy_Trending_Node = "gifs/trending";
// const Giphy_Search_Query = TBC;
const Giphy_Results_Limit = '&limit=10';
const arrayTrendingGifsResults = [];
/**
 * @async
 * @function Declaration-gifsRequest()
 * @param Yes 3(giphyNode, searchQuery, resultsLimit) 
 * @description Launches a request to Giphy's Trending Gifs end point.
 * @returns An array containing the Trending Gifs JSON data received in the request.
 */
const gifsRequest = async (giphyNode, searchQuery = '', resultsLimit = '',) => { 
  let response = await fetch(Giphy_BaseURL + giphyNode + Giphy_APIKey + searchQuery + resultsLimit);
  let gifObject = await response.json();
  console.log(`${giphyNode} -> ${searchQuery} -> ${resultsLimit}:`);
  console.table(gifObject.data);
  return gifObject.data;
}