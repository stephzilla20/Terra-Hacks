import { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";



import React from 'react'

function WebcamCapture() {

  const webcamRef = useRef(null)
  const [imgSrc, setImgSrc] = useState(null)
  
  const capture = useCallback( () => {
    const imageSrc = webcamRef.current.getScreenshot()
    setImgSrc(imageSrc)
  }, [webcamRef, setImgSrc])

  return (
    <div>
      <Webcam
        audio = {false}
        ref = {webcamRef}
        screenshotFormat = "image/jpeg"
      />
      <button onClick={capture}>take pic</button>
      {imgSrc && (
        <img
          src={imgSrc}
        />
      )}
    </div>
  )
}

export default WebcamCapture
