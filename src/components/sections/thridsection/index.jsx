import React, { useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { PlayCircleOutlined,  } from '@ant-design/icons';
import Feature1 from "../../../assets/images/feature.jpg";
import Feature2 from "../../../assets/images/featured1.jpg";
import Feature3 from "../../../assets/images/featured2.jpg";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Container } from "@containers";
// Import custom styles
import './style.scss';

const ImageCarousel = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoClick = (event) => {
    const video = event.currentTarget;
    if (video.paused) {
      video.play();
      setIsVideoPlaying(true);
    } else {
      video.pause();
      setIsVideoPlaying(false);
    }
  };

  return (
    <Container>
<div className='corusel-wrap'>


        <h2>Videolar:</h2>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <div className="carousel-content">
            <img src={Feature1} alt="Feature 1" className="carousel-image" />
            <button className="play-button" onClick={() => handleVideoClick(document.getElementById('video1'))}><PlayCircleOutlined /></button>
            <video id="video1" className="carousel-video" onClick={handleVideoClick}>
              <source src="path/to/your/video1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel-content">
            <img src={Feature2} alt="Feature 2" className="carousel-image" />
            <button className="play-button" onClick={() => handleVideoClick(document.getElementById('video2'))}><PlayCircleOutlined /></button>
            <video id="video2" className="carousel-video" onClick={handleVideoClick}>
              <source src="path/to/your/video2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel-content">
            <img src={Feature3} alt="Feature 3" className="carousel-image" />
            <button className="play-button" onClick={() => handleVideoClick(document.getElementById('video3'))}><PlayCircleOutlined /></button>
            <video id="video3" className="carousel-video" onClick={handleVideoClick}>
              <source src="path/to/your/video3.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </Container>
  );
};

export default ImageCarousel;
