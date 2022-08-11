import React from "react";
import Slider from "react-slick";


const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  swipeToSlide:true,
  centerMode:true,
};

export default function carousel() {
  return (
    <div className="carousel">
    <Slider {...settings}>
      <div className="item">
        <div className="avatar"></div>
        <div className="info">
          <h1>Ludwig Lagos</h1>
          <p>Illustrator</p>
          <button className="viewContBtn" type="">
          View content
        </button> 
        </div>
      </div>

      <div className="item">
        <div className="avatar1"></div>
        <div className="info">
          <h1>Nina Valentine</h1>
          <p>3D artist</p>
          <button className="viewContBtn" type="">
          View content
        </button> 
        </div>
      </div>

      <div className="item">
        <div className="avatar2"></div>
        <div className="info">
          <h1>Karolina Vargas</h1>
          <p>Illustrator</p>
          <button className="viewContBtn" type="">
          View content
        </button> 
        </div>
      </div>


      <div className="item">
        <div className="avatar3"></div>
        <div className="info">
          <h1>Ralph Clark</h1>
          <p>Illustrator</p>
          <button className="viewContBtn" type="">
          View content
        </button> 
        </div>
      </div>
      
    </Slider>
    </div>
  );
}
