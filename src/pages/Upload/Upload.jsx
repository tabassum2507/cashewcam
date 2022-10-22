import React, { useState, useRef } from "react";
import { HiArrowUturnLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Camera from "react-html5-camera-photo";
import { getByteBase6, toBase64 } from "./base64";
import "react-html5-camera-photo/build/css/index.css";
import "../../scss/style4.scss";

function Upload() {
  const [isUseCamera, setUseCamera] = useState(false);
  const [photo, setPhoto] = useState(null);
  const refPhoto = useRef(null);
  const [result, setResult] = useState(null);

  const handleTakePhoto = async (dataUri) => {
    if (dataUri) {
      setPhoto(dataUri);
    }
  };

  const handleUploadPhoto = async (e) => {
    const input = e.target;
    const _photo = await toBase64(input.files[0]);
    setPhoto(_photo);
  };

  const fileChangeHandler = (e) => {
    setResult(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  const handleResetPhoto = () => {
    setPhoto(false);
    // isUseCamera(false);
  };

  return (
    <div className="upload">
      <div className="upload__header">
        <Link to="/animation">
          <HiArrowUturnLeft style={{ fontSize: "28px", color: "#fff" }} />
        </Link>

        <div className="upload__header--title">CASHEW CAM</div>
      </div>

      <div className="upload__body">
        <p className="upload__body--para">Here's your grading cashew</p>

        {!photo &&
          (isUseCamera ? (
            <Camera onTakePhoto={handleTakePhoto} />
          ) : (
            <div style={{ color: "#000" }} className="btn">
              <input type="file" onChange={handleUploadPhoto} />
              </div>
          ))}
         

         <div className={`${!photo && "hide"}`}>
          <img ref={refPhoto} src={photo} width="350" height="640"></img>

          <div class="camera__button">
            <button onClick={handleResetPhoto}>Retake</button>
            <button onClick={fileChangeHandler}>
              <Link to="/Report" className="submit-btn">
                Submit
              </Link>
            </button>
          </div>
        </div>
      </div> 

      </div>
    

      
 
  );
}

export default Upload;
