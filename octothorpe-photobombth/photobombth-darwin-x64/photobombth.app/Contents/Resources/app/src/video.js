const constraints = {
  audio: false,
  video: {
    mandatory: {
      minWidth: 853,
      minHeight: 480,
      maxWidth: 853,
      maxHeight: 480
    }
  }
}

function handleSuccess(videoEl, stream) {
  videoEl.src = window.URL.createObjectURL(stream)
}

function handleError(error) {
  console.log('Camer error: ', error);
}

exports.init = (nav, videoEl) => {
  nav.getUserMedia = nav.webkitGetUserMedia
  navigator.getUserMedia(constraints, stream => handleSuccess(videoEl, stream), handleError)
}

exports.captureBytes = (videoEl, ctx, canvasEl) => {
  ctx.drawImage(videoEl, 0, 0)
  return canvasEl.toDataURL('image/png')
}

exports.captureBytesFromLiveCanvas = (canvasEl) => {
  return canvasEl.toDataURL('image/png')
}
