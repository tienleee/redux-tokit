
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';

const Banner = () => {

  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-cool-new-mobile-phone-promotion-purple-banner-image_183067.jpg" className="d-block w-100" alt="Slide 1" />
        </div>
        <div className="carousel-item">
          <img src="https://cdn.tgdd.vn/hoi-dap/1355217/banner-tgdd-800x300.jpg" className="d-block w-100" alt="Slide 2" />
        </div>
        <div className="carousel-item">
          <img src="https://didongvang.com/files/assets/banner01.jpg" className="d-block w-100" alt="Slide 3" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );

};

export default Banner;
  