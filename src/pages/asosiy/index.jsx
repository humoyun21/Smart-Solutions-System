
import React, { useRef } from 'react';
import "./style.scss";
import { Container } from "@containers";
import { Carousel, Typography ,Row, Col, Button, Card } from "antd";

import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';

import { EffectCoverflow, Navigation } from 'swiper/modules';



//  Images
import Corusle1 from "../../assets/images/corusel1.png";
import Corusle2 from "../../assets/images/corusel2.png";
import Corusle3 from "../../assets/images/corusel3.jpg";
import Feature1 from "../../assets/images/featured1.jpg";
import Feature2 from "../../assets/images/featured2.jpg";
import Feature3 from "../../assets/images/featured3.jpg";



const { Title, Paragraph } = Typography;


const items = [
  {
    bgImage: Corusle1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet.",
    title: "Lorem ipsum dolor",
    buttonText: "More Read",
  },
  {
    bgImage: Corusle2,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet.",
    title: "Lorem ipsum dolor",
    buttonText: "Sale Now",
  },
  {
    bgImage: Corusle3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet.",
    title: "Lorem ipsum dolor",
    buttonText: "Contact Me",
  },
];

const { Meta } = Card;
const productData = [
    {
      title: "Hymn to the United Nations",
      description:
        "Get inspired by this revived W.H. Auden's Hymn to the United Nations. Let music for peace Be the paradigm, For peace means to change At the right time, As the World-Clock, Goes Tick and Tock.So maythe story Of our human city Presently move",
      image: Feature1,
      link: "Read-more",
    },
    {
      title: "A symbol of hope for global unity",
      description:
        "In 1945, representatives of 50 countries met in Sanancisco at the United Nations Conference on International Organization to draw up the United  Nations Charter. The United Nations officially came into existence on 24 October 1945",
      image: Feature2,
      link: "Read-more",
    },
    {
      title: "How it Started?",
      description:
        "In 1945, representatives of 50 countries met in Sanancisco at the United Nations Conference on International Organization to draw up the United  Nations Charter. The United Nations officially came into existence on 24 October 1945",
      image: Feature3,
      link: "Read-more",
    },
    
  ];
const newsData = [
    {
      title: "Hymn to the United Nations",
      description:
        "Get inspired by this revived W.H. Auden's Hymn to the United Nations. Let music for peace Be the paradigm, For peace means to change At the right time, As the World-Clock, Goes Tick and Tock.So maythe story Of our human city Presently move",
      image: Feature1,
      link: "Read-more",
    },
    {
      title: "A symbol of hope for global unity",
      description:
        "In 1945, representatives of 50 countries met in Sanancisco at the United Nations Conference on International Organization to draw up the United  Nations Charter. The United Nations officially came into existence on 24 October 1945",
      image: Feature2,
      link: "Read-more",
    },
    {
      title: "How it Started?",
      description:
        "In 1945, representatives of 50 countries met in Sanancisco at the United Nations Conference on International Organization to draw up the United  Nations Charter. The United Nations officially came into existence on 24 October 1945",
      image: Feature3,
      link: "Read-more",
    },
    {
        title: "How it Started?",
        description:
          "In 1945, representatives of 50 countries met in Sanancisco at the United Nations Conference on International Organization to draw up the United  Nations Charter. The United Nations officially came into existence on 24 October 1945",
        image: Feature3,
        link: "Read-more",
      },
];

//swiper


function Index() {
  const iframeRefs = useRef([]);

  const handleIframeClick = (index) => {
    iframeRefs.current.forEach((iframe, idx) => {
      if (index !== idx && iframe) {
        iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
      }
    });
  };

  const videos = [
    { id: 'M7lc1UVf-VE', name: 'Mike', title: 'Fashion Director' },
    { id: 'sBws8MSXN7A', name: 'Samite', title: 'Designer' },
    { id: 'ScMzIvxBSi4', name: 'Kaity', title: 'Fashion Director' },
    { id: 'K4TOrB7at0Y', name: 'Oakes', title: 'Photographer' },
    { id: 'aqz-KE-bpKQ', name: 'Lauren', title: 'Model' },
    { id: '9bZkp7q19f0', name: 'Ryan', title: 'Stylist' },
  ];


    const truncateDescription = (description, length) => {
        return description.length > length ? description.substring(0, length) + "..." : description;
      };
  return (

    <>
     <section id="intro" className=" pt-[92px] pb-[132px]">
      <Container>
        <Carousel autoplay>
          {items.map((item, index) => (
            <div
              key={index}
              className="carousel-item"
              style={{
                backgroundImage: `url(${item.bgImage})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                height: 550,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                color: "#fff",
              }}
            >
              <div className="carousel-content">
                <Title
                  level={1}
                  style={{ color: "rgb(1, 154, 204)", marginBottom: 20 }}
                >
                  {item.title}
                </Title>
                <Paragraph style={{ color: "#1c1e53", marginBottom: 40 }}>
                  {item.description}
                </Paragraph>
                <a
                  href="/"
                  className="carousel-button"
                  style={{
                    
                    padding: "10px 30px",
                    border: "2px solid rgb(1, 154, 204)",
                    color: "#fff",
                    borderRadius: "5px",
                    fontSize: 20,
                    fontWeight: "bold",
                    textDecoration: "none",
                  }}
                >
                  {item.buttonText}
                </a>
              </div>
            </div>
          ))}
        </Carousel>
      </Container>
    </section>

   

    <section id="gratis1">
        <Container>
          <div className="container" style={{ padding: '10px', borderRadius: '2px' }}>
            <Title level={4} style={{ fontSize: 18, fontWeight: 600, textAlign: 'left', marginLeft: 5, marginBottom: 1, color: '#0099ff' }}>
              Our product
            </Title>
            <Title level={5} style={{ fontSize: 24, marginLeft: 5, marginBottom: 5, textAlign: 'left', color: 'rgb(1, 154, 204)', textTransform: 'uppercase' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas risus sapien, posuere ac iaculis sed.
            </Title>
            <Row gutter={[16, 16]}>
              {productData.map((item, index) => (
                <Col xs={24} sm={12} md={8} key={index}>
                  <Card hoverable cover={<img className="card__img" src={item.image} alt={`Feature ${index}`} />}>
                    <Card.Meta
                      title={<Title level={4} className="card__title" style={{ color: '#0099ff' }}>{item.title}</Title>}
                      description={<Paragraph className="card__description">{item.description}</Paragraph>}
                    />
                    <Button type="primary" className="card__button" style={{ backgroundColor: 'rgb(1, 154, 204)', borderColor: 'rgb(1, 154, 204)' }}>
                      {item.link}
                    </Button>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
    </section>

    <section>

      <Container>
        <div className='video-text'>
            <h2>Videolar</h2>
        </div>
      <div id="app">
    
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween={-60}
        coverflowEffect={{
          rotate: 0,
          stretch: 100,
          depth: 300,
          modifier: 1,
          slideShadows: false,
        }}
        navigation={true}
        modules={[EffectCoverflow, Navigation]}
        className="mySwiper"
      >
        {videos.map((video, index) => (
          <SwiperSlide key={index}>
            <div className="video-slide" onClick={() => handleIframeClick(index)}>
              <img src={`https://img.youtube.com/vi/${video.id}/0.jpg`} alt={video.name} />
              <div className="video-overlay">
                <h3>{video.name}</h3>
                <p>{video.title}</p>
                <button className="play-button">▶</button>
              </div>
              <iframe
                ref={(el) => (iframeRefs.current[index] = el)}
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${video.id}?enablejsapi=1`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

      </Container>
  
    </section>

   


    <section id="gratis1">
      <div className="container">
        <div className="content-box">
          <h4 className="section-title">Yangiliklar</h4>
          <div className="grid-container">
            {newsData.map((item, index) => (
              <div
                className={`card-article ${
                  index === 0 ? "card-featured" : index === 3 ? "card-full-width" : "card-small"
                }`}
                key={index}
              >
                <img
                  className={`card-img ${index === 0 || index === 3 ? "card-img-short" : ""}`}
                  src={item.image}
                  alt={`Feature ${index}`}
                />
                <div className="card-data">
                  <h4 className="card-title">{item.title}</h4>
                  {index === 0 ? (
                    <p className="card-description">{item.description}</p>
                  ) : (
                    <p className="card-description">
                      {truncateDescription(item.description, 100)}
                    </p>
                  )}
                  <p className="card-button">{item.link}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    
    </>
   
  );
}

export default Index;