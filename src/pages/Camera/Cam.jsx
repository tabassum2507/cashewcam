import React, { useState, useRef } from "react";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import { Link } from "react-router-dom";
import "../../scss/style1.scss";
import { IoCloseSharp } from "react-icons/io5";



const Cam = () => {
  const [isUseCamera, setUseCamera] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [result, setResult] = useState(null);
  const refPhoto = useRef(null);

  const handleTakePhoto = async (dataUri) => {
    if (dataUri) {
      setPhoto(dataUri);
    }
  };

  const fileChangeHandler = (e) => {
    setResult(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  const handleResetPhoto = () => {
    setPhoto(false);
    // isUseCamera(false);
  };

  // const handleSubmit = () => {
  //   const data = new FormData();
  //   data.append('file', result,  );

  //   fetch('http://127.0.0.1:8000/api/process_base64/image', {
  //     method: 'POST',
  //     body: data,
  //   }).then((response) => {
  //     response.json().then((body) => {
  //       console.log(response)
  //     });
  //   });
  // }

  return (
    <>
      <form className="camera">
        <div className="camera__section">
          <div className="camera__back">
            <Link to="/animation" style={{color: "#fff"}}>
          <IoCloseSharp />
          </Link >
          </div>
        <Camera
          onTakePhoto={handleTakePhoto}
          idealResolution={{ width: 260, height: 500 }}
          isImageMirror={true} onClick={() => setUseCamera(false)}
        />
        <div className={`${!photo && "hide"}`}>
          <img ref={refPhoto} src={photo} width="350" height="640"></img>

          <div class="camera__button">
          <button onClick={handleResetPhoto}>Retake</button>
          <button onClick={fileChangeHandler}><Link to="/Report" className="submit-btn">Submit</Link></button>
        </div>
        </div>

        </div>

      </form>
    </>
  );
};

export default Cam;
