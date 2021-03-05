let recorder;
let newGifFile;
let seconds = 0;
let timerInterval;
const startTimer = () => {
  seconds += 1;
    if (seconds < 10) {
      videoDurationViewer.innerText = '00:' + '0' + seconds;
    } else if (seconds >= 10) {
      videoDurationViewer.innerText =  '00:' + seconds;
    }
}
const stopTimer = () => {
  clearInterval(timerInterval);
  seconds = 0;
  videoDurationViewer.innerText =  '00:00';
}
const getMediaFromUser = async () => {
  try {
    stream = await navigator.mediaDevices.getUserMedia({ audio: false,
      video: true
    }).then(stream => {
      addClass(stepTwo, 'currentStep-wrapper');
      removeClass(stepOne, 'currentStep-wrapper');
      removeClass(cameraViewWrapper, 'display-none');
      addClass(textInstructionsGifosWrapper, 'display-none');
      addClass(beginButton, 'display-none');
      removeClass(recordButton, 'display-none');
      removeClass(videoDurationViewer, 'display-none');
      videoCameraView.srcObject = stream;
      videoCameraView.play();
      recorder = RecordRTC(stream, { 
        type: 'gif',
        frameRate: 1,
        quality: 10,
        onGifRecordingStarted: function() {
        console.log('started') }
      });
    });
  } catch(err) {}
}
const displayTextForCameraPermission = () => {
  textInstructionsGifosWrapper.innerHTML = 
  `
  <h4 id="headingInstructionsContentGifosCapture">¿Nos das acceso<br> 
  a tu cámara?</h4>
  <p id="paragraphInstructionsContentGifosCapture">El acceso a tu camara será válido sólo<br> por el tiempo en el que estés creando el GIFO.
  </p>
  `
}
const uploadToGiphy = async (fileGif) => { 
  try {
    let response = await fetch(Giphy_UploadURL + Giphy_APIKey, {
      method: 'POST',
      body: fileGif,
    });
    let newGif = response.json();
    console.log(newGif);
    return newGif;
  } catch(err) {
    console.log(err)
  }
}
const triggerSearchByID = (gifID) => {
  requestToGiphy(Giphy_SearchByID_Node, gifID)
  .then(data => {
    arrayOfCreatedGifsIDs.push(data);
    localStorage.localStorageCreatedGifs = JSON.stringify(arrayOfCreatedGifsIDs);
  })
  .catch(err => console.error(err))
}
beginButton.addEventListener('click', () => {
  videoDurationViewer.innerText =  '00:00';
  addClass(stepOne, 'currentStep-wrapper');
  displayTextForCameraPermission();
  getMediaFromUser();
});
recordButton.addEventListener('click', () => {
  addClass(recordButton, 'display-none');
  removeClass(doneButton, 'display-none');
  recorder.startRecording();
  timerInterval = setInterval(startTimer, 1000);
})
let blobURLRecordedGif;
doneButton.addEventListener('click', () => {
  stopTimer();
  addClass(doneButton, 'display-none');
  removeClass(uploadGifoButton, 'display-none');
  removeClass(repeatVideoButton, 'display-none');
  addClass(videoDurationViewer, 'display-none');
  recorder.stopRecording(() => {
    blobURLRecordedGif = URL.createObjectURL(recorder.getBlob());
    console.log(`àca el blob: ${blobURLRecordedGif}`);
    newGifFile = new FormData();
    newGifFile.append('file', recorder.getBlob(), 'myGif.gif');
    console.log(newGifFile.get('file'))
    addClass(videoCameraView, 'display-none');
    removeClass(previewRecordedGif, 'display-none');
    previewRecordedGif.src = blobURLRecordedGif;
  })
})
repeatVideoButton.addEventListener('click', () => {
  recorder.reset();
  newGifFile.delete('file');
  removeClass(videoCameraView, 'display-none');
  addClass(previewRecordedGif, 'display-none');
  addClass(repeatVideoButton, 'display-none');
  removeClass(videoDurationViewer, 'display-none');
  addClass(uploadGifoButton, 'display-none');
  removeClass(recordButton, 'display-none');
})
uploadGifoButton.addEventListener('click', () => {
  removeClass(cameraOverlayWrapper, 'display-none');
  addClass(uploadGifoButton, 'display-none');
  addClass(repeatVideoButton, 'display-none');
  uploadingGifoStatusText.innerText = 'Estamos subiendo tu GIFO';

  uploadToGiphy(newGifFile)
  .then(uploadedGifo => {
    addClass(stepThree, 'currentStep-wrapper');
    removeClass(stepTwo, 'currentStep-wrapper');
    addClass(uploadingGifoOnLoad, 'display-none');
    removeClass(uploadingGifoButtonsWrapper, 'display-none');
    removeClass(uploadingGifoCheck, 'display-none');
    uploadingGifoStatusText.innerText = 'GIFO subido con éxito!'
    removeClass(createOtherGifoButton, 'display-none');
    
    triggerSearchByID(uploadedGifo.data.id)
    console.log(`Aqui esta: ${uploadedGifo.data.id}`);
  })
})
createOtherGifoButton.addEventListener('click', () => {
  recorder.reset();
  newGifFile.delete('file');
  addClass(createOtherGifoButton, 'display-none');
  removeClass(recordButton, 'display-none');
  removeClass(videoCameraView, 'display-none');
  addClass(previewRecordedGif, 'display-none');
  removeClass(videoDurationViewer, 'display-none');
  addClass(cameraOverlayWrapper, 'display-none');
  removeClass(uploadingGifoOnLoad, 'display-none');
  addClass(uploadingGifoCheck, 'display-none');
})
uploadingGifoDownloadButton.addEventListener('click', ()=>{
  let gifURL = arrayOfCreatedGifsIDs[arrayOfCreatedGifsIDs.length-1].images.original.url;
  let username = arrayOfCreatedGifsIDs[arrayOfCreatedGifsIDs.length-1].username;
  let gifTitle = arrayOfCreatedGifsIDs[arrayOfCreatedGifsIDs.length-1].title;
  downloadGif(gifURL, username, gifTitle);
});
uploadingGifCopyLinkButton.addEventListener('click', ()=>{
  let gifURL = arrayOfCreatedGifsIDs[arrayOfCreatedGifsIDs.length-1].url;
  console.log(gifURL);
  copyToClipboard(gifURL);
});

