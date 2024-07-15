import React , { useState } from "react";

import "./style.scss";
import { Container } from "@containers";
import { Carousel, Typography ,Row, Col, Button, Card } from "antd";
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { PlayCircleOutlined } from '@ant-design/icons';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow, Pagination } from 'swiper/modules';


//  Images
import Corusle1 from "../../assets/images/corusel1.png";
import Corusle2 from "../../assets/images/corusel2.png";
import Corusle3 from "../../assets/images/corusel3.jpg";
import Icon1 from "../../assets/images/icon1.svg";
import Icon2 from "../../assets/images/icon2.svg";
import Icon3 from "../../assets/images/icon3.svg";
import Icon4 from "../../assets/images/icon4.svg";
import Woman from "../../assets/images/woman.jpg";
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

function Index() {
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

    <section id="main-section" className="main-section">
            <Container>
                <Row gutter={[16, 16]} className="second">
                    <Col xs={24} sm={12} md={6} className="second-all">
                        <Card hoverable cover={<img alt="Icon1" src={Icon1} />}>
                            <Meta title="ALL PRODUCTS" description="Discover our advantage. Offering the widest range of monitoring solutions in the industry." />
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={6} className="second-all">
                        <Card hoverable cover={<img alt="Icon2" src={Icon2} />}>
                            <Meta title="DOWNLOAD CENTER" description="Explore our download center. Find everything from product brochures to our software files." />
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={6} className="second-all">
                        <Card hoverable cover={<img alt="Icon3" src={Icon3} />}>
                            <Meta title="SUPPORT" description="Learn from some of the top technical minds in the industry and get the support you need." />
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={6} className="second-all">
                        <Card hoverable cover={<img alt="Icon4" src={Icon4} />}>
                            <Meta title="CONTACT US" description="We want to hear from you. We love learning about your projects and creating new partnerships." />
                        </Card>
                    </Col>
                </Row>

                <Row gutter={[16, 16]} className="about">
                    <Col xs={24} md={12} className="about-us">
                        <h2>ABOUT US</h2>
                        <h3>YOUR PROJECT’S ON SOLID GROUND WITH RST.</h3>
                        <h4>
                            RST was founded in 1977, when Robert Straghan Sr. built a better pneumatic piezometer. We’ve come a long way since then, but some things haven’t changed. Relentless curiosity and a drive to solve exciting problems still fuel us.<br /><br />
                            In our bustling lab, we’re continually devising original solutions to evolving engineering challenges. Our sensors enable the next generation of projects so you can go places you’ve never been before with confidence.<br /><br />
                            For over 40 years, RST’s pioneering technologies have enabled iconic infrastructure projects, including dams, tunnels, bridges, and more. From our base in Western Canada, we’ve grown a reputation for right-fit solutions that span the lifecycle of your project, from designing and building to training, installing, inspecting and updating monitoring systems.
                            That’s a legacy worth protecting.
                        </h4>
                        <Button type="primary" size="large">REQUEST A QUOTE</Button>
                    </Col>
                    <Col xs={24} md={12} className="about-img">
                        <img src={Woman} alt="Woman" />
                    </Col>
                </Row>

                
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
      <div className='corusel-wrap'>
        <h2>Videolar:</h2>
        <div className="container mx-auto px-2 5">
            <h1 className=" text-center text-[20px] py-2">Carusel test </h1>
            <div className="swiper-wrapper-test">
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                    </SwiperSlide>
                </Swiper>
            </div>
    </div>
       
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