const trendingSearchTermsToDOM = (trendingSearchTermsObject) => {
  let trendingSearchTerm = trendingSearchTermsObject
  let trendingSearchTermsWrapper = document.getElementById('trendingSearchTermsDOM');
  let trendingSearchTermsAnchor= document.createElement('p');
  trendingSearchTermsAnchor.className = 'trendingTermsDOM'
  trendingSearchTermsAnchor.innerText = `${trendingSearchTerm}`;
  trendingSearchTermsWrapper.appendChild(trendingSearchTermsAnchor)
}
gifsTrendingsRequest(Giphy_Trending_Search_Terms_Node)
  .then((data) => {
    for (i = 0; i < 5; i++) {
      trendingSearchTermsToDOM(data[i]);
    }
  })
  .catch(err => console.error(err));
/**
 * @function listenToTrendingTerms
 */
  const listenToTrendingTerms = () => {
    Array.from(trendingTerms).forEach(term => {
      term.addEventListener('click', () => {
        cleanSearchResults(); 
        let trendingTerm = term.innerText;
        userSearchInput.value = trendingTerm;
        triggerSearch();
      })
    });
  }

/**
 * @function addEventListener
 */
trendingSuggestionsWrapper.addEventListener('mouseover', listenToTrendingTerms);