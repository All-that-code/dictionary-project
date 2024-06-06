import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="Photos ms-5 me-5">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-4 image" key={index}>
                <a
                  href={photo.src.original}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={photo.src.tiny}
                    className="img-fluid"
                    alt="photos"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
