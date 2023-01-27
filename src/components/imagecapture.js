import React, { useState } from 'react'
import Webcam from 'react-webcam'
const WebcamComponent = () => <Webcam />

const videoConstraints = {
  width: 183,
  height: 183,
  facingMode: 'user',
}

const Imagecapture = () => {
  const [picture, setPicture] = useState('')
  const webcamRef = React.useRef(null)
  const capture = React.useCallback(() => {
    const pictureSrc = webcamRef.current.getScreenshot()
    setPicture(pictureSrc)
  })

  return (
    <div>
    
      <div>
        {picture == '' ? (
          <Webcam
            audio={false}
            height={183}
            ref={webcamRef}
            width={183}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
        ) : (
          <img src={picture} />
        )}
      </div>
      <div>
        {picture != '' ? (
          <button
            onClick={(e) => {
              e.preventDefault()
              setPicture()
            }}
            className="btn btn-primary"
          >
            Retake
          </button>
        ) : (
          <button
            onClick={(e) => {
              e.preventDefault()
              capture()
            }}
            className="btn btn-primary btn-sm"
          >
            Capture
          </button>
        )}
      </div>
    </div>
  )
}
export default Imagecapture