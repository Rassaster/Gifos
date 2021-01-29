/**
 * @function triggerSearch
 * @fires gifsSearchRequest() Fetch. If fullfiled: 
 * 1. pushes the Array of Objects returned by the fetch  to the [arraySearchGifsResults] as a new element. To access this data use index [0]; 
 * 2. Iterates with a for-loop through the first 12 elements and calls searchGifsResultsToDOM() on each element to add each Gif to the Results Grid.
 * 3. Sets the value of [copyOfarraySearchGifsResults] by slicing the first 12 elements of [arrayTrendingGifsResults].
 * 4. Calls closeAutocompleteSuggestions().
 * 5. Calls emptySearchValue().
 * @const gifsSearchRequest Function.
 * @const arraySearchGifsResults [Array] that will store all the data returned from fetch gifsRequest() as a new element. To access Object data, refer to index [0].
 * @const copyOfarraySearchGifsResults [Array].
 * @const searchGifsResultsToDOM Function.
 * @const closeAutocompleteSuggestions Function.
 * @const emptySearchValue Function.
 * @throws
 */
const triggerSearch = (searchTerm) => {
  gifsSearchRequest(searchTerm)
  .then((data) => {
    displaySearchTermAsResultsTitle(searchTerm);
    arraySearchGifsResults.push(data);
    if (arraySearchGifsResults[0].length <= 12) {
      for (i = 0; i < arraySearchGifsResults[0].length; i++) {
        searchGifsResultsToDOM(arraySearchGifsResults[0][i]);
      }
    } else {
      for (i = 0; i < 12; i++) {
        searchGifsResultsToDOM(arraySearchGifsResults[0][i]);
      }
    }
    copyOfarraySearchGifsResults = arraySearchGifsResults[0].slice(12);
    closeRestartSearch();
  })
  .catch(err => console.error(err));
}
/**
 * @function searchGifsResultsToDOM
 * @param {array} searchResultsGifObject.
 * @description Creates new Node Element: "calledsearchResultGiCardfWrapper" with an overlay containing the Gif, Username and Title information. All the info is defined with .innerHTML and appended to the #searchResultsGifsGridDOM node.
 * @var gifUser {GifData}["username"]
 * @var gifTitle {GifData}["title"]
 * @var gifImg {GifData}["images"]["downsized"]["url"]
 * @var searchResultsGifsGridContainer #searchResultsGifsGridDOM
 * @var searchResultGiCardfWrapper <div> new Node Element 
 * @fires .appendChild(.createElement.innerHTML)
 */
const searchGifsResultsToDOM = (searchResultsGifObject) => {
  let gifUser = searchResultsGifObject.username;
  let gifTitle = searchResultsGifObject.title;
  let gifImg = searchResultsGifObject.images.downsized.url;

  let searchResultsGifsGridContainer = document.getElementById('searchResultsGifsGridDOM');
  let searchResultGiCardfWrapper = document.createElement('div');
  searchResultGiCardfWrapper.className = 'searchResultGifCard';
  searchResultGiCardfWrapper.innerHTML = 
  `<img src=${gifImg} alt="Gif Search Result"
            />
            <div class="flexContainer searchResultGifCard-overlay">
              <div class="flexContainer socialSearchResultGifCards-wrapper">
                <button class="trendingCardsButton trendingCardsFavButton">
                  <svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <defs>
                      <path d="M16.277005,9.49708565 C17.2350987,8.53854203 18.5348228,8 19.8900901,8 C21.2453574,8 22.5450815,8.53854203 23.5031752,9.49708565 C24.461458,10.4549185 25,11.7546426 25,13.1099099 C25,14.4651772 24.461458,15.7649013 23.5030448,16.7228646 L16.5555186,23.6703908 C16.2485981,23.9773114 15.7509815,23.9773114 15.444061,23.6703908 L8.49653479,16.7228646 C6.50115505,14.7274848 6.50115507,11.492335 8.49653484,9.49695525 C10.4919146,7.50157548 13.7270644,7.50157545 15.7224442,9.4969552 L15.9997898,9.77430079 L16.277005,9.49708565 Z M15.9997898,22.0032043 L21.5585127,16.4444814 L22.3917176,15.6112765 C23.0553247,14.9479809 23.4281615,14.0481719 23.4281615,13.1099099 C23.4281615,12.1716479 23.0553247,11.271839 22.3917176,10.6085433 C21.728161,9.94467529 20.8283521,9.5718385 19.8900901,9.5718385 C18.9518281,9.5718385 18.0520191,9.94467529 17.388593,10.6084129 L16.5555186,11.4414873 C16.2485981,11.7484078 15.7509815,11.7484078 15.444061,11.4414873 L14.6109866,10.6084129 C13.2294479,9.22687423 10.9895312,9.22687425 9.6079925,10.6084129 C8.22645385,11.9899516 8.22645383,14.2298683 9.60799246,15.611407 L15.9997898,22.0032043 Z" id="path-fav"></path>
                    </defs>
                    <g id="GIFOS" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g id="00-UI-Kit" transform="translate(-816.000000, -2777.000000)">
                        <g id="icon-fav" transform="translate(816.000000, 2777.000000)">
                          <rect class="rectangle-cardIconBtn" fill-rule="nonzero" x="0" y="0" width="32" height="32" rx="6"></rect>
                          <mask id="mask-2" fill="white">
                            <use xlink:href="#path-fav"></use>
                          </mask>
                          <use class="icon-cardIconBtn" fill-rule="nonzero" xlink:href="#path-fav"></use>
                        </g>
                      </g>
                    </g>
                  </svg>
                </button>
                <button class="searchResultGifCardsButton trendingCardsDownloadButton">
                  <svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <defs>
                          <path d="M23.5,19.3333333 C23.9602373,19.3333333 24.3333333,19.7064294 24.3333333,20.1666667 L24.3333333,20.1666667 L24.3333333,22.6666667 C24.3333333,24.0473785 23.2140452,25.1666667 21.8333333,25.1666667 L21.8333333,25.1666667 L10.1666667,25.1666667 C8.78595479,25.1666667 7.66666667,24.0473785 7.66666667,22.6666667 L7.66666667,22.6666667 L7.66666667,20.1666667 C7.66666667,19.7064294 8.03976271,19.3333333 8.5,19.3333333 C8.96023729,19.3333333 9.33333333,19.7064294 9.33333333,20.1666667 L9.33333333,20.1666667 L9.33333333,22.6666667 C9.33333333,23.126904 9.70642938,23.5 10.1666667,23.5 L10.1666667,23.5 L21.8333333,23.5 C22.2935706,23.5 22.6666667,23.126904 22.6666667,22.6666667 L22.6666667,22.6666667 L22.6666667,20.1666667 C22.6666667,19.7064294 23.0397627,19.3333333 23.5,19.3333333 Z M16,6.83333333 C16.4602373,6.83333333 16.8333333,7.20642938 16.8333333,7.66666667 L16.8333333,7.66666667 L16.8326667,17.3213333 L18.7440777,15.4107443 C19.0423948,15.1124272 19.5106167,15.0875674 19.8372513,15.3361651 L19.922589,15.4107443 C20.2480259,15.7361813 20.2480259,16.2638187 19.922589,16.5892557 L19.922589,16.5892557 L16.5892557,19.922589 C16.5844698,19.9273748 16.5796402,19.9320903 16.5747682,19.9367354 C16.5575683,19.9531417 16.5392293,19.9691754 16.5202088,19.984393 C16.5115288,19.9913858 16.5034395,19.9976103 16.4952644,20.003666 C16.472374,20.0205663 16.4479317,20.036781 16.4226325,20.0516974 C16.4174579,20.0548288 16.4120846,20.0579155 16.4066847,20.0609374 C16.3824377,20.074429 16.3578886,20.0866225 16.332691,20.0976064 C16.3252234,20.1008705 16.317454,20.1041127 16.309647,20.1072321 C16.2911687,20.1146333 16.2726396,20.1212953 16.2538198,20.1273066 C16.0839816,20.1814152 15.9001245,20.1797632 15.7310626,20.1222745 C15.7179263,20.1178256 15.7057373,20.1133328 15.693686,20.1085671 C15.6796843,20.1030442 15.6652017,20.0968635 15.6508682,20.090254 C15.6317619,20.0813811 15.6135799,20.072131 15.5957973,20.062249 C15.5866928,20.0572743 15.5772205,20.0517762 15.5678364,20.0460761 C15.5452714,20.0322541 15.5239542,20.0178793 15.5033674,20.0025772 C15.4713593,19.9788748 15.4402223,19.952067 15.4107443,19.922589 L15.4852935,19.9887574 C15.4628265,19.9710895 15.4412902,19.9522912 15.4207704,19.9324483 L15.4107443,19.922589 L12.077411,16.5892557 C11.7519741,16.2638187 11.7519741,15.7361813 12.077411,15.4107443 C12.4028479,15.0853074 12.9304854,15.0853074 13.2559223,15.4107443 L13.2559223,15.4107443 L15.1666667,17.3213333 L15.1666667,7.66666667 C15.1666667,7.24183224 15.484571,6.89124835 15.8954684,6.83982618 Z" id="path-download"></path>
                    </defs>
                    <g id="GIFOS" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g id="00-UI-Kit" transform="translate(-816.000000, -2819.000000)">
                        <g id="icon-download" transform="translate(816.000000, 2819.000000)">
                          <rect class="rectangle-cardIconBtn" fill-rule="nonzero" x="0" y="0" width="32" height="32" rx="6"></rect>
                          <mask id="mask-2" fill="white">
                            <use xlink:href="#path-download"></use>
                          </mask>
                          <use class="icon-cardIconBtn" fill-rule="nonzero" xlink:href="#path-download"></use>
                        </g>
                      </g>
                    </g>
                  </svg>
                </button>
                <button class="trendingCardsButton trendingCardsMaxButton">
                  <svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <defs>
                      <path d="M13.7440777,17.077411 C14.0695146,16.7519741 14.5971521,16.7519741 14.922589,17.077411 C15.2480259,17.4028479 15.2480259,17.9304854 14.922589,18.2559223 L14.922589,18.2559223 L10.5106667,22.6666667 L13.5,22.6666667 C13.9248344,22.6666667 14.2754183,22.984571 14.3268405,23.3954684 L14.3333333,23.5 C14.3333333,23.9602373 13.9602373,24.3333333 13.5,24.3333333 L13.5,24.3333333 L8.5,24.3333333 C8.42735036,24.3333333 8.35687206,24.3240367 8.28968984,24.3065683 C8.28143536,24.3043626 8.2723213,24.3018398 8.26324389,24.2991593 C8.23860114,24.2918998 8.21538669,24.2838495 8.19266315,24.2748285 C8.18074334,24.2701084 8.1682729,24.2648257 8.15591113,24.2592256 C8.13573211,24.2500223 8.11657783,24.2403904 8.09786317,24.2300599 C8.08416136,24.2225839 8.07029411,24.2144138 8.05662247,24.2058082 C8.04099666,24.1958723 8.02608297,24.185781 8.01152389,24.1752303 C7.97635184,24.1498137 7.94258057,24.1210919 7.91074435,24.0892557 L7.97640331,24.1483347 C7.95749643,24.1330463 7.93927177,24.1169477 7.92178213,24.1000917 L7.91074435,24.0892557 C7.90627757,24.0847889 7.9018721,24.080284 7.89752793,24.0757421 C7.88346181,24.061045 7.86952937,24.0453544 7.85619668,24.0291517 C7.84499976,24.0156013 7.83461723,24.0021619 7.82470133,23.9884893 C7.81176479,23.9705393 7.79935397,23.9518947 7.78769381,23.9327428 C7.78245144,23.9242728 7.77733711,23.9155142 7.77239596,23.9066847 C7.70499425,23.786072 7.66666667,23.647512 7.66666667,23.5 L7.66666667,23.5 L7.66666667,18.5 C7.66666667,18.0397627 8.03976271,17.6666667 8.5,17.6666667 C8.96023729,17.6666667 9.33333333,18.0397627 9.33333333,18.5 L9.33333333,18.5 L9.33266667,21.4886667 Z M23.5,7.66666667 C23.5463775,7.66666667 23.5927549,7.67051406 23.6386125,7.67820885 C23.6984379,7.68817901 23.7558467,7.70448539 23.8104015,7.72639526 C23.8163994,7.72880854 23.8221462,7.73118865 23.8278713,7.73363583 C23.8546194,7.74509371 23.8808527,7.7580177 23.9062649,7.77223413 C23.9155142,7.77733711 23.9242728,7.78245144 23.9329556,7.78773896 C23.9518947,7.79935397 23.9705393,7.81176479 23.9886357,7.82488542 C24.0237558,7.85027784 24.0574701,7.87895884 24.0892557,7.91074435 L24.0291517,7.85619668 C24.0453544,7.86952937 24.061045,7.88346181 24.0761896,7.89796004 L24.0892557,7.91074435 C24.0927653,7.91425396 24.096237,7.91778709 24.0996709,7.92134323 C24.1169477,7.93927177 24.1330463,7.95749643 24.1483347,7.97640331 C24.1577247,7.98793671 24.1667514,7.99971893 24.1754211,8.01167956 C24.185781,8.02608297 24.1958723,8.04099666 24.205483,8.05624369 C24.2144138,8.07029411 24.2225839,8.08416136 24.2303184,8.09820441 C24.2403904,8.11657783 24.2500223,8.13573211 24.2589203,8.15529084 C24.2648257,8.1682729 24.2701084,8.18074334 24.2750737,8.19331011 C24.3125814,8.28776116 24.3333333,8.39145714 24.3333333,8.5 L24.3333333,8.5 L24.3333333,13.5 C24.3333333,13.9602373 23.9602373,14.3333333 23.5,14.3333333 C23.0397627,14.3333333 22.6666667,13.9602373 22.6666667,13.5 L22.6666667,13.5 L22.6666667,10.5106667 L18.2559223,14.922589 C17.9576052,15.2209062 17.4893833,15.2457659 17.1627487,14.9971683 L17.077411,14.922589 C16.7519741,14.5971521 16.7519741,14.0695146 17.077411,13.7440777 L17.077411,13.7440777 L21.4886667,9.33266667 L18.5,9.33333333 C18.0751656,9.33333333 17.7245817,9.01542901 17.6731595,8.60453156 L17.6666667,8.5 C17.6666667,8.03976271 18.0397627,7.66666667 18.5,7.66666667 L18.5,7.66666667 Z" id="path-maxSize"></path>
                    </defs>
                    <g id="GIFOS" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g id="00-UI-Kit" transform="translate(-816.000000, -2861.000000)">
                        <g id="icon-max-normal" transform="translate(816.000000, 2861.000000)">
                          <rect class="rectangle-cardIconBtn" fill-rule="nonzero" x="0" y="0" width="32" height="32" rx="6"></rect>
                          <mask id="mask-2" fill="white">
                            <use xlink:href="#path-maxSize"></use>
                          </mask>
                          <use class="icon-cardIconBtn" fill-rule="nonzero" xlink:href="#path-maxSize"></use>
                        </g>
                      </g>
                    </g>
                  </svg>
                </button>
              </div>
              <div class="flexContainer userTitleSearchrResultGifCards-wrapper">
                <h4 class="userSearchResultGifCard">${gifUser}</h4>
                <h4 class="titleSearchResultGifCard">${gifTitle}</h4>
              </div>
            </div>
  `
  searchResultsGifsGridContainer.appendChild(searchResultGiCardfWrapper);
  searchResultsContainer.classList.remove('display-none');
}
/**
 * @function addEventListener
 * @event click on searchButton = #searchButton
 * @listens #searchButton-searchBar const = searchButton;
 * @param {event, callBack()}
 * @callback anonymous() Calls cleanSearchResults() and triggerSearch().
 * @const cleanSearchResults Function.
 * @const triggerSearch Function.
 */
searchButton.addEventListener('click', ()=>{
  cleanSearchResults();
  triggerSearch(userSearchInput.value);
})
/**
 * @function addEventListener()
 * @event keypress "Enter"
 * @listens #searchBar const = userSearchInput;
 * @param {event, callBack(event)}
 * @callback anonymous(event) First, checks if the 'keypress' equals the Enter key. Then, calls cleanSearchResults() and triggerSearch().
 * @const cleanSearchResults Function.
 * @const triggerSearch Function.
 */
userSearchInput.addEventListener('keypress', event => {
  if (event.keyCode === 13) {
    cleanSearchResults();
    triggerSearch(userSearchInput.value);
  }
})
/**
 * @function addEventListener
 * @event click on const searchCloseSuggestions = #closeButton-searchBar
 * @listens #closeButton-searchBar
 */
closeSearchButton.addEventListener('click', closeRestartSearch);
/**
 * @function addEventListener
 * @event click on const searchCloseSuggestions = #closeButton-searchBar
 * @listens #closeButton-searchBar
 */
verMasSearchResultsButtonDOM.addEventListener('click', verMasButtonsFunctionality);