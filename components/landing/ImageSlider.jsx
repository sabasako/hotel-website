"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <img
          src="https://23c133e0c1637be1e07d-be55c16c6d91e6ac40d594f7e280b390.ssl.cf1.rackcdn.com/u/gpch/Park-Hotel-Group---Explore---Grand-Park-City-Hall-Facade.jpg
"
          alt="Hotel 1"
        />
      </div>
      <div>
        <img
          src="https://www.peninsula.com/-/media/images/the-peninsula-hotels/destination/phk_exterior_1280.jpg
"
          alt="Hotel 2"
        />
      </div>
      <div>
        <img
          src="https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/900/450/75/dam/wdpro-assets/dlr/places-to-stay/disneyland-hotel/resort-overview/disneyland-hotel-06.jpg?1718723808355
"
          alt="Hotel 3"
        />
      </div>
    </Slider>
  );
}

export default ImageSlider;
