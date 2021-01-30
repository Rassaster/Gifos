const trendingSearchTermsToDOM = (trendingSearchTermsObject) => {
  let trendingSearchTerm = trendingSearchTermsObject
  let trendingSearchTermsWrapper = document.getElementById('trendingSearchTermsWrapperDOM');
  let trendingSearchTermsAnchor= document.createElement('p');
  trendingSearchTermsAnchor.className = 'trendingTermsDOM'
  trendingSearchTermsAnchor.innerText = `${trendingSearchTerm}`;
  trendingSearchTermsWrapper.appendChild(trendingSearchTermsAnchor)
}
requestToGiphy(Giphy_Trending_Search_Terms_Node)
  .then((data) => {
    for (i = 0; i < 5; i++) {
      trendingSearchTermsToDOM(data[i]);
    };
    Array.from(trendingTerms).forEach(term => {
      term.addEventListener('click', () => {
        triggerSearch(term.innerText); 
      })
    })
  })
  .catch(err => console.error(err));