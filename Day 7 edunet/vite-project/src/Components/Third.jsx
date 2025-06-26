import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Third() {
  return (
    <>
      <div className="card" style={{ width: '18rem' }}>
        <img
          className="card-img-top"
          src="https://s7d1.scene7.com/is/image/wbcollab/India_PM_Narendra_Modi-2?qlt=90&fmt=webp&resMode=sharp2"
          alt="Card image cap"
          width={100}
          height={100}
        />
        <div className="card-body">
          <h5 className="card-title">Narendra Modi</h5>
          <p className="card-text">
            Narendra Modi is the best prime minister in the world.
          </p>
          <a href="#" className="btn btn-primary">
            Jai Hind
          </a>
        </div>
      </div>
    </>
  );
}

export default Third;
