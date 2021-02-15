const triggerAddFavButtonGif = (favButtonClass, sourceArrayToGetGifObject, favActiveClass) => {
  Array.from(favButtonClass).forEach(buttonFav => {
    buttonFav.addEventListener('click', () => {
      let indexOfButton = Array.from(favButtonClass).indexOf(buttonFav);

      // Is NOT favorite:
      if (checkIfIsFavoriteByGifid(sourceArrayToGetGifObject[indexOfButton].id, arrayOfFavoriteGifs) === false || checkIfIsFavoriteByGifid(sourceArrayToGetGifObject[indexOfButton].id, arrayOfFavoriteGifs) === undefined) {
          arrayOfFavoriteGifs.push(sourceArrayToGetGifObject[indexOfButton]);
          slicedArrayOfarrayOfFavoriteGifs.push(sourceArrayToGetGifObject[indexOfButton]);
          localStorage.localStorageFavGifs = JSON.stringify(arrayOfFavoriteGifs);
          removeClass(favActiveClass[indexOfButton], 'display-none');

          if (favGifsGridContainer) {
            emptyInnerHTMLofElement(favGifsGridContainer);
            primaryDisplayOnGrid(arrayOfFavoriteGifs, favGifsGridContainer, 'favFavButton', 'display-block');
            triggerAddFavButtonGif(favFavButton, arrayOfFavoriteGifs, favActiveSearchResults);
            checkIfAreGifsSaved(arrayOfFavoriteGifs, displayFavoritesGridContainer, NoFavoritesContentCcontainer);
          }

          if (arrayOfFavoriteGifs.length > 12) {
            slicedArrayOfarrayOfFavoriteGifs = arrayOfFavoriteGifs.slice(12);
          }
          if(favGifsGridContainer) {
            showHideVerMasButton(slicedArrayOfarrayOfFavoriteGifs, verMasFavoritesButtonDOM);
          }
        // It IS favorite:
      } else if (checkIfIsFavoriteByGifid(sourceArrayToGetGifObject[indexOfButton].id, arrayOfFavoriteGifs) === true) {
        let clickedGifId = sourceArrayToGetGifObject[indexOfButton].id;
        for (i = 0; i < arrayOfFavoriteGifs.length; i++) {
          if(clickedGifId === arrayOfFavoriteGifs[i].id) {
            arrayOfFavoriteGifs.splice(i, 1);
            slicedArrayOfarrayOfFavoriteGifs.splice(i, 1);
          }
        }
        localStorage.localStorageFavGifs = JSON.stringify(arrayOfFavoriteGifs);
        addClass(favActiveClass[indexOfButton], 'display-none');
        if (favGifsGridContainer) {
            emptyInnerHTMLofElement(favGifsGridContainer);
            primaryDisplayOnGrid(arrayOfFavoriteGifs, favGifsGridContainer, 'favFavButton', 'display-block');
            triggerAddFavButtonGif(favFavButton, arrayOfFavoriteGifs, favActiveSearchResults);
            checkIfAreGifsSaved(arrayOfFavoriteGifs, displayFavoritesGridContainer, NoFavoritesContentCcontainer);
            for (i = 0; i < arrayTrendingGifsResults[0].length; i++) {
              if(clickedGifId === arrayTrendingGifsResults[0][i].id) {
                addClass(favActiveTrending[i], 'display-none');
              }
            }
        }
        if (arrayOfFavoriteGifs.length > 12) {
          slicedArrayOfarrayOfFavoriteGifs = arrayOfFavoriteGifs.slice(12);
        }
        if (favGifsGridContainer) {
          showHideVerMasButton(slicedArrayOfarrayOfFavoriteGifs, verMasFavoritesButtonDOM);
        }
      }
    })
  })
}
// const triggerMaxViewButtonGif = (favButtonClass, sourceArrayToGetGifObject, favActiveClass, maxViewButtonClass) => {
//   Array.from(maxViewButtonClass).forEach(buttonMaxView => {
//     buttonMaxView.addEventListener('click', () => {
//       let indexOfButton = Array.from(maxViewButtonClass).indexOf(buttonMaxView);
//       removeClass(maxViewOverlayContainer, 'overlayZero');
//       addClass(maxViewOverlayContainer, 'overlayFullScreen');
//       imgMaxGifOverlay.src = sourceArrayToGetGifObject[indexOfButton].images.downsized.url;

//       // It IS favorite:
//       if (checkIfIsFavoriteByGifid(sourceArrayToGetGifObject[indexOfButton].id, arrayOfFavoriteGifs) === true) {

//       }
//     })
//   })
// }

const triggerFavMaxOverlayButton = (sourceArrayToGetGifObject, indexOfButton) => {
  // Is NOT favorite:
  if (checkIfIsFavoriteByGifid(sourceArrayToGetGifObject[indexOfButton].id, arrayOfFavoriteGifs) === false || checkIfIsFavoriteByGifid(sourceArrayToGetGifObject[indexOfButton].id, arrayOfFavoriteGifs) === undefined) {
    alert('No soy gif favorito aún!')
    arrayOfFavoriteGifs.push(sourceArrayToGetGifObject[indexOfButton]);
    slicedArrayOfarrayOfFavoriteGifs.push(sourceArrayToGetGifObject[indexOfButton]);
    localStorage.localStorageFavGifs = JSON.stringify(arrayOfFavoriteGifs);
    removeClass(favActiveMaxViewOverlay, 'display-none');
    if (arrayOfFavoriteGifs.length > 12) {
      slicedArrayOfarrayOfFavoriteGifs = arrayOfFavoriteGifs.slice(12);
    }
    if(favGifsGridContainer) {
      showHideVerMasButton(slicedArrayOfarrayOfFavoriteGifs, verMasFavoritesButtonDOM);
    }
  }
  
}
const triggerMaxViewButtonGif = (sourceArrayToGetGifObject, maxViewButtonClass) => {
  Array.from(maxViewButtonClass).forEach(buttonMaxView => {
    buttonMaxView.addEventListener('click', () => {
      let indexOfButton = Array.from(maxViewButtonClass).indexOf(buttonMaxView);

      removeClass(maxViewOverlayContainer, 'overlayZero');
      addClass(maxViewOverlayContainer, 'overlayFullScreen')
      maxViewOverlayCloseButton.addEventListener('click', closeMaxViewOverlay);
      console.log(sourceArrayToGetGifObject[indexOfButton])
      imgMaxGifOverlay.src = sourceArrayToGetGifObject[indexOfButton].images.downsized.url;
      userMaxFullGif.innerText = sourceArrayToGetGifObject[indexOfButton].username;
      titleMaxFullGif.innerText = sourceArrayToGetGifObject[indexOfButton].title;
      socialMaxFullGifButtonsContainer.innerHTML = 
      `
      <button id="favButtonMaxViewOverlay" class="trendingCardsButton">
                  <svg id="favActiveMaxViewOverlay" class="display-none" width="20px" height="18px" viewBox="0 0 20 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <defs>
                      <path d="M275.322322,427 C276.828175,427 278.272313,427.609648 279.336861,428.694752 C280.40162,429.779051 281,431.250383 281,432.784592 C281,434.318801 280.40162,435.790133 279.336716,436.87458 L271.617243,444.739417 C271.27622,445.086861 270.723313,445.086861 270.38229,444.739417 L262.662816,436.87458 C260.445728,434.615742 260.445728,430.953442 262.662816,428.694604 C264.879905,426.435766 268.474516,426.435766 270.691605,428.694604 L270.999766,429.008569 L271.307783,428.694752 C272.372332,427.609648 273.81647,427 275.322322,427 Z" id="favIcon-active"></path>
                    </defs>
                    <g id="GIFOS" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g id="24-Mobile-Gifo-Max" transform="translate(-261.000000, -427.000000)">
                        <mask id="mask-2" fill="white">
                          <use xlink:href="#favIcon-active"></use>
                        </mask>
                        <use id="icon-fav-active" fill="#572EE5" fill-rule="nonzero" xlink:href="#favIcon-active"></use>
                      </g>
                    </g>
                  </svg>
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
                <button id="downloadButtonMaxViewOverlay" class="searchResultGifCardsButton">
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
      `
      const favActiveMaxViewOverlay = document.getElementById('favActiveMaxViewOverlay');
      // It IS favorite:
      if (checkIfIsFavoriteByGifid(sourceArrayToGetGifObject[indexOfButton].id, arrayOfFavoriteGifs) === true) {
        removeClass(favActiveMaxViewOverlay, 'display-none');
      }
      const favButtonMaxViewOverlay = document.getElementById('favButtonMaxViewOverlay');
      favButtonMaxViewOverlay.addEventListener('click', () => {
        triggerFavMaxOverlayButton(sourceArrayToGetGifObject, indexOfButton);
      });
      if (maxViewOverlayCloseButton) {
        document.addEventListener('keyup', event => {
          if (event.keyCode === 27) {
            closeMaxViewOverlay();
          }
        })
      }
    });
  })
}





// window.onload = setTimeout(()=>{
//   Array.from(trendingCardsDownloadButton).forEach(buttonDownload => {
//     buttonDownload.addEventListener('click', () => {
//       let indexOfButton = Array.from(trendingCardsDownloadButton).indexOf(buttonDownload)
//       alert(indexOfButton)
//     })
//   })
//   Array.from(trendingCardsMaxButton).forEach(buttonMaxSize => {
//     buttonMaxSize.addEventListener('click', () => {
//       let indexOfButton = Array.from(trendingCardsMaxButton).indexOf(buttonMaxSize)
//       alert(indexOfButton)
//     })
//   })
// }, 1000)