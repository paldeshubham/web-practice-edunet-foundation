import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Second() {
  return (
    <>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="https://png.pngtree.com/thumb_back/fh260/background/20230930/pngtree-a-blue-sky-above-clouds-with-clouds-image_13313410.jpg"
              alt="First slide"
              width={100}
          height={200}
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1504253163759-c23fccaebb55?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fHw%3D"
              alt="Second slide"
              width={100}
          height={200}
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 h-100"
              src="data:image/jpeg;base64,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"
              alt="Third slide"
              width={100}
            height={200}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
