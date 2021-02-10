let recorder;
let newGifFile;
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

beginButton.addEventListener('click', () => {
  addClass(stepOne, 'currentStep-wrapper');
  displayTextForCameraPermission();
  getMediaFromUser();
});
recordButton.addEventListener('click', () => {
  addClass(recordButton, 'display-none');
  removeClass(doneButton, 'display-none');
  recorder.startRecording();
})
let blobURL;
doneButton.addEventListener('click', () => {
  addClass(doneButton, 'display-none');
  removeClass(uploadGifoButton, 'display-none');
  removeClass(repeatVideoButton, 'display-none');
  addClass(videoDurationViewer, 'display-none');
  recorder.stopRecording(() => {
    blobURL = URL.createObjectURL(recorder.getBlob());
    console.log(`àca el blob: ${blobURL}`);
    newGifFile = new FormData();
    newGifFile.append('file', recorder.getBlob(), 'myGif.gif');
    console.log(newGifFile.get('file'))
    addClass(videoCameraView, 'display-none');
    removeClass(previewRecordedGif, 'display-none');
    previewRecordedGif.src = blobURL;
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
    console.log(`Aqui esta: ${uploadedGifo.data.id}`);
  });
})