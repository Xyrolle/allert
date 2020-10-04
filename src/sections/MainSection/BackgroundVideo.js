import React from "react";
import v from "../../assets/v.mp4";

const BackgroundVideo = (props) => {
  return (
    <video
      autoPlay
      loop
      muted
      style={{
        position: "absolute",
        zIndex: "-1",
        width: "100.2vw",
        height: "100.5vh",
        left: "50%",
        right: "50%",
        top: "50%",
        objectFit: "cover",
        transform: "translate(-50%, -50%)",
        filter: "brightness(30%)",
      }}
    >
      <source src={v} type="video/mp4" />
    </video>
  );
};

export default BackgroundVideo;
