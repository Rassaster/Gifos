const trendingSearchTermsToDOM = (trendingSearchTermsObject) => {
  let trendingSearchTerm = trendingSearchTermsObject
  let trendingSearchTermsWrapper = document.getElementById('trendingSearchTermsDOM');
  let trendingSearchTermsAnchor= document.createElement('a');
  trendingSearchTermsAnchor.attribute = 'href'
  trendingSearchTermsAnchor.href = `${Giphy_BaseURL}${Giphy_Search_Node}${Giphy_APIKey}&q=${trendingSearchTerm}`
  trendingSearchTermsAnchor.innerText = `|${trendingSearchTerm}|`;
  trendingSearchTermsWrapper.appendChild(trendingSearchTermsAnchor)
}
gifsRequest(Giphy_Trending_Search_Terms_Node)
  .then((data) => {
    for (i = 0; i < 5; i++) {
      trendingSearchTermsToDOM(data[i]);
    }
  })
  .catch(err => alert(err));