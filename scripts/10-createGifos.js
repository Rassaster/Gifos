let recorder;
let form = new FormData();
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
        height: 200,
        width: 100,
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
doneButton.addEventListener('click', () => {
  addClass(doneButton, 'display-none');
  removeClass(uploadGifoButton, 'display-none');
  removeClass(repeatVideoButton, 'display-none');
  addClass(videoDurationViewer, 'display-none');
  recorder.stopRecording(() => {
    form.append('file', recorder.getBlob(), 'myGif.gif');
    console.log(form.get('file'))
  })
})
repeatVideoButton.addEventListener('click', () => {
  addClass(repeatVideoButton, 'display-none');
  removeClass(videoDurationViewer, 'display-none');
  addClass(uploadGifoButton, 'display-none');
  removeClass(doneButton, 'display-none');
  recorder.startRecording();
})

const uploadToGiphy = async (fileGif) => { 
  let response = await fetch(Giphy_UploadURL + fileGif + Giphy_APIKey, {
    method: 'POST',
    body: fileGif,
    mode: 'no-cors'
  })
  console.log(response.status);
  console.log(response.json())
  return response.json();
}