toggleDarkMode.addEventListener('click', () => {
  toggleClass(webBody, 'darkMode');
  cameraRollSmallAsset.src = 'assets/3.createGifosAssets/0.cameraAssets/elementDM-cameraRoll2-darkMode.svg';
  cameraRollBigAsset.src = 'assets/3.createGifosAssets/0.cameraAssets/elementDM-cameraRoll3-darkMode.svg';
  // cameraAloneAsset.src = 'assets/3.createGifosAssets/0.cameraAssets/';
  cameraRollFloorAsset.src = 'assets/3.createGifosAssets/0.cameraAssets/elementDM-cameraRoll-darkMode.svg';
})