import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./index.css";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}  className='carousel-bg'>
      <Carousel.Item className='carousel-item'>
      <div className="home-bg">
        <div className="home">
            <div className="content">
            <h1>NEW ERA OF SMARTPHONES</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button>Shop Now</button>
        </div>
        <div className="image-card">
            <img  src = "https://res.cloudinary.com/dxsppjwqc/image/upload/v1704162268/realistic-smartphone-official-colors_52683-51019-removebg-preview_xcgupz.png" alt="" />
        </div>
        </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
       <div className="home-bg">
        <div className="home">
            <div className="content sec-content">
            <h1>Explore Last Year Discounted Cloth</h1>
            <p>Offer ending soon...</p>
            <button>Get Now</button>
        </div>
        <div className="image-card sec-image-card">
            <img  src = "https://res.cloudinary.com/dxsppjwqc/image/upload/v1704430826/close-up-flannel-shirt-detail_23-2149575382-removebg-preview_roahsm.png" alt="" />
        </div>
        </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="home-bg">
        <div className="home">
            <div className="content">
            <h1>HEADSETS</h1>
            <p>Explore the world of virtual reality with GEEK VR</p>
            <button>Shop Now</button>
        </div>
        <div className="image-card">
            <img  src = "https://res.cloudinary.com/dxsppjwqc/image/upload/v1704430636/headphones-audio-listen_74190-571-removebg-preview_jlqxri.png" alt="" />
        </div>
        </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;