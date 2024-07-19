import React, { useRef } from "react";


import Carousel from "react-material-ui-carousel";
import { Typography, Row, Col, Button, Form, Input, Card } from "antd";
import { Paper, Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { styled } from "@mui/system";
import { EnvironmentOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';

//style
import "./style.scss";

const swiperStyle = {
  width: "1700px",
  height: "350px",
};

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";
import {
  EffectCoverflow,
  Navigation,
  Autoplay,
  Parallax,
} from "swiper/modules";

//  Images

import MainSection1 from "../../assets/images/mainSection1.png";
import MainSection2 from "../../assets/images/mainSection2.png";
import MainSection3 from "../../assets/images/mainSection3.png";
import About1 from "../../assets/images/about1.jpg";
import About2 from "../../assets/images/about2.png";
import About3 from "../../assets/images/about3.jpg";
import About4 from "../../assets/images/about4.jpg";
import Service1 from "../../assets/images/service1.png";
import Service2 from "../../assets/images/service2.png";
import Service3 from "../../assets/images/service3.png";
import Service4 from "../../assets/images/service4.png";
import Service5 from "../../assets/images/service5.png";
import Service6 from "../../assets/images/service6.png";

import Feature3 from "../../assets/images/featured3.jpg";

//product image:

import Smartwater from "../../assets/images/smartwater.jpg";
import Smartwell from "../../assets/images/smartwell.jpg";
import Vertushka from "../../assets/images/vertushka.jpg";
import Piezometr from "../../assets/images/piezometr.jpg";
import Smartchannel from "../../assets/images/smartchannel.jpg";

//news images

import Yangiliklardayjesti from "../../assets/images/yangiliklardayjesti.png";
import Xorazm from "../../assets/images/xorazm.png";
import Germanya from "../../assets/images/germanya.png";
import Tashkent from "../../assets/images/tashkent.png";

//Parents
import Sux from "../../assets/images/sux.svg";
import Bkpi from "../../assets/images/bkpi.svg";
import Iroq from "../../assets/images/iroq.svg";
import Suv from "../../assets/images/suv.png";
import Muhum from "../../assets/images/muhum.png";
import Sisgeo from "../../assets/images/sisgeo.png";
import Taliho from "../../assets/images/taliho.png";
import Xylem from "../../assets/images/xylem.png";
import Winshef from "../../assets/images/winshef.png";
import Daxi from "../../assets/images/daxi.png";
import Dyp from "../../assets/images/dyp.png";
import Panda from "../../assets/images/panda.png";

const { Title, Paragraph } = Typography;

const { Meta } = Card;
//Mahsulotlar
const productData = [
  {
    title: "Smart Water",
    description:
      "Suv sathi va uning sarfini onlayn monitoring qilish qurilmasi",
    image: Smartwater,
    link: "Batafsil",
  },
  {
    title: "Smart Well",
    description:
      "Quduqlarda suv sho’rlanishini o'lchash va suv sathini hisoblash imkoniyatiga ega.",
    image: Smartwell,
    link: "Batafsil",
  },
  {
    title: "Piezometr(Хлопушка)",
    description: "Qurilma quduqlarda suv sathini o’lchash uchun ishlatiladi.",
    image: Piezometr,
    link: "Batafsil",
  },
  {
    title: "Vertushka",
    description: "Suv oqimi tezligi va sathini o'lchash imkoniyatiga ega. ",
    image: Vertushka,
    link: "Batafsil",
  },
  {
    title: "Smart Channel",
    description:
      "Smart channel - bu aqlli suv o’lchash qurilmasi bo’lib asosan kichik kanallardagi suv sarfini o’lchash uchun mo’ljallangan.",
    image: Smartchannel,
    link: "Batafsil",
  },
];
//yangiliklar
const newsData = [
  {
    title: "Yangiliklar dayjesti (08.07.2024 - 15.07.2024)",
    description:
      "Qozog‘iston Xitoy korporatsiyalari bilan suv resurslarini boshqarish bo‘yicha hamkorlik masalalarini ko’rib chiqmoqda. Xitoy Xalq Respublikasi Raisi Si Szinpinning Qozog‘istonga davlat tashrifi doirasida Suv xo‘jaligi va irrigatsiya vaziri Nurjan Nurjigitov Xitoyning nufuzli korporatsiyalari bilan Qozog‘istonda suv resurslarini boshqarish va infratuzilmasini rivojlantirish masalalarini muhokama qildi.  ",
    image: Yangiliklardayjesti,
    link: "Batafsil",
  },
  {
    title: "Xorazmda dala-o'quv seminari bo'lib o'tdi",
    description:
      "Xorazm ilmiy-tajriba stansiyasi hududida suv o‘lchash va suv hisobini yuritish mavzusida ko‘rgazmali dala-o‘quv seminari bo‘lib o‘tdi",
    image: Xorazm,
    link: "Batafsil",
  },
  {
    title: "Shanghai Panda Machinery (Group) Co.,Ltd bilan uchrashuv",
    description:
      "Xitoy davlatining Shanghai Panda Machinery (Group) Co.,Ltd kompaniyasi tomonidan ishlab chiqarilgan maxsus suv o'lchovchi qurilmalar Smart Solutions System MChJ ga olib kelindi va xar bitta uskuna kesimida Shanghai Panda Machinery (Group) Co.,Ltd mutaxassislari tomonidan taqdimotlar qilindi.",
    image: Germanya,
    link: "Batafsil",
  },
  {
    title: "Toshkent Xalqaro Investitsiya Forumi",
    description:
      "O'zida 2500 mamlakatdan 93 nafardan ziyod ishtirokchini jamlagan III Toshkent Xalqaro Investitsiya Forumi (TIIF) investitsiya sohasida muloqotni rivojlantirish va ilg'or tajribalarni almashish uchun yetakchi global platforma maqomini mustahkamladi.",
    image: Feature3,
    image: Tashkent,
    link: "Batafsil",
  },
];

const StyledPaper = styled(Paper)({
  padding: "20px",
});

const items = [
  {
    bgImage: MainSection1,
    description:
      "«Smart Solutions System» aqlli texnologiyalarni joriy qilishda O'zbekistondagi yetakchi kompaniyalardan biri hisoblanadi. Suv inshootlari, nasos stansiyalari, gidro uzellar va suv omborlarini avtomatlashtirish va monitoring qilish kompaniyaning asosiy yo’nalishlaridan biri.",
    title: "Innovatsiya, sifat va ishonchlilik kelajakni belgilaydi!",
    buttonText: "More Read",
  },
  {
    bgImage: MainSection2,
    description:
      "«Smart Solutions System» aqlli texnologiyalarni joriy qilishda O'zbekistondagi yetakchi kompaniyalardan biri hisoblanadi. Suv inshootlari, nasos stansiyalari, gidro uzellar va suv omborlarini avtomatlashtirish va monitoring qilish kompaniyaning asosiy yo’nalishlaridan biri.",
    title: "Innovatsiya, sifat va ishonchlilik kelajakni belgilaydi!",
    buttonText: "Sale Now",
  },
  {
    bgImage: MainSection3,
    description:
      "«Smart Solutions System» aqlli texnologiyalarni joriy qilishda O'zbekistondagi yetakchi kompaniyalardan biri hisoblanadi. Suv inshootlari, nasos stansiyalari, gidro uzellar va suv omborlarini avtomatlashtirish va monitoring qilish kompaniyaning asosiy yo’nalishlaridan biri.",
    title: "Innovatsiya, sifat va ishonchlilik kelajakni belgilaydi!",
    buttonText: "Contact Me",
  },
];

const imageData = [
  {
    image: About1,
  },
  {
    image: About2,
  },
  {
    image: About3,
  },
  {
    image: About4,
  },
];

const serviceData = [
  {
    title: "Mobile App Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id libero vulputate, convallis risus nec, volutpat erat. Ut ac tortor sed elit tempor auctor sit amet nec augue. Curabitur ut massa est. Pellentesque vulputate ex elit, vel luctus neque tempor.",
    images: Service6,
  },

  {
    title: "Web App Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id libero vulputate, convallis risus nec, volutpat erat. Ut ac tortor sed elit tempor auctor sit amet nec augue. Curabitur ut massa est. Pellentesque vulputate ex elit, vel luctus neque tempor.",
    images: Service2,
  },

  {
    title: "ERP Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id libero vulputate, convallis risus nec, volutpat erat. Ut ac tortor sed elit tempor auctor sit amet nec augue. Curabitur ut massa est. Pellentesque vulputate ex elit, vel luctus neque tempor.",
    images: Service3,
  },

  {
    title: "Maintenance & Support",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id libero vulputate, convallis risus nec, volutpat erat. Ut ac tortor sed elit tempor auctor sit amet nec augue. Curabitur ut massa est. Pellentesque vulputate ex elit, vel luctus neque tempor.",
    images: Service4,
  },

  {
    title: "SEO & Marketing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id libero vulputate, convallis risus nec, volutpat erat. Ut ac tortor sed elit tempor auctor sit amet nec augue. Curabitur ut massa est. Pellentesque vulputate ex elit, vel luctus neque tempor.",
    images: Service5,
  },

  {
    title: "Content Generaion",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id libero vulputate, convallis risus nec, volutpat erat. Ut ac tortor sed elit tempor auctor sit amet nec augue. Curabitur ut massa est. Pellentesque vulputate ex elit, vel luctus neque tempor.",
    images: Service1,
  },
];

//contact

const ContactForm = () => (
  <Form layout="vertical">
    <Form.Item label="Full Name" name="fullname" rules={[{ required: true, message: 'Please enter your full name!' }]}>
      <Input />
    </Form.Item>
    <Form.Item label="Mobile Number" name="mobile" rules={[{ required: true, message: 'Please enter your mobile number!' }]}>
      <Input />
    </Form.Item>
    <Form.Item label="Email Address" name="email" rules={[{ required: true, message: 'Please enter a valid email address!', type: 'email' }]}>
      <Input />
    </Form.Item>
    <Form.Item label="Address" name="address">
      <Input.TextArea />
    </Form.Item>
    <Form.Item>
      <Button type="primary" htmlType="submit">Submit</Button>
    </Form.Item>
  </Form>
);
//parents



function Index() {
  const iframeRefs = useRef([]);

  const handleIframeClick = (index) => {
    iframeRefs.current.forEach((iframe, idx) => {
      if (index !== idx && iframe) {
        iframe.contentWindow.postMessage(
          '{"event":"command","func":"pauseVideo","args":""}',
          "*"
        );
      }
    });
  };
  //videos
  const videos = [
    {
      id: "AXOEeI5ZpRc?si=mwMkVMuEpahfqMWh-VE",
      name: "Mike",
      title: "Fashion Director",
    },
    {
      id: "KmYBFeRtJiU?si=Vtbsa8j8jcZBPMps",
      name: "Samite",
      title: "Designer",
    },
    {
      id: "OQIjjNkmznY?si=jkPtYjUGlxHiu5PA",
      name: "Kaity",
      title: "Fashion Director",
    },
    {
      id: "sE_GVLjh-4o?si=gOjB5XT4S4FOl2TM",
      name: "Oakes",
      title: "Photographer",
    },
    { id: "feYodaCJjfY?si=iLTpT7iABlt8RrnV", name: "Lauren", title: "Model" },
    { id: "SC7Z4psEISo?si=qumnvw_M42rQXREa", name: "Ryan", title: "Stylist" },
    { id: "dA8KNJ2OeX8?si=uh4_XMSTHvcXLIHR", name: "Ryan", title: "Stylist" },
  ];

  const truncateDescription = (description, length) => {
    return description.length > length
      ? description.substring(0, length) + "..."
      : description;
  };

  

  
  return (
    // Intro
    <>
      <Carousel
        indicators={false}
        autoPlay={2000}
        swipe={true}
        cycleNavigation={true}
        animation="slide"
      >
        {items.map((item, index) => (
          <StyledPaper
            sx={{
              height: 550,
              display: "flex",
              justifyContent: "flex-start",
              backgroundImage: `url(${item.bgImage})`,
              backgroundPosition: "center",
              backgroundSize: "100%",
              padding: 5,
            }}
            key={index}
          >
            <Box
              sx={{
                textAlign: "left",
              }}
              width={600}
            >
              <Box
                component="h4"
                sx={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "rgb(1, 154, 204)",
                  marginBottom: 5,
                }}
              >
                {item.title}
              </Box>

              <Box
                component="h4"
                sx={{
                  fontSize: 20,
                  fontWeight: "bold",
                  marginBottom: 4,
                  color: "#333",
                }}
              >
                {item.description}
              </Box>

              <a
                to="/"
                style={{
                  paddingTop: "5px",
                  paddingBottom: "5px",
                  paddingLeft: "35px",
                  paddingRight: "35px",
                  border: " 4px solid rgb(1, 154, 204)",
                  textDecoration: "none",
                  color: "#333",
                  borderRadius: "5px",
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                {item.buttonText}
              </a>
            </Box>
          </StyledPaper>
        ))}
      </Carousel>

      {/* About US */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          marginTop: 8,
        }}
        component="section"
      >
        <Box
          sx={{
            width: 500,
            paddingLeft: 4,
            textAlign: "left",
            paddingBottom: 2,
            paddingTop: 2,
          }}
        >
          <Box
            sx={{
              fontSize: 14,
              fontWeight: 600,
            }}
            component="h4"
          >
            BIZ HAQIMIZDA QISQACHA MA'LUMOT
          </Box>

          <Box
            sx={{
              marginTop: 2,
              fontSize: 24,
              color: "rgb(1, 154, 204)",
            }}
            component="h5"
          >
            BIZNING KOMPANIYAMIZ BILAN YAQINDAN TANISHING HAMDA O'ZINGIZ UCHUN
            FOYDALI MA'LUMOTLARNI OLING
          </Box>

          <Box
            sx={{
              marginTop: 2,
            }}
            component="p"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            consequat pharetra sapien bibendum congue. Ut eget nisl sit amet
            orci viverra elementum. Maecenas vitae malesuada nisi. Aenean
            finibus quam eget est suscipit, et luctus turpis tristique. Cras
            sagittis faucibus maximus. Aliquam erat volutpat. Ut ac sapien ac
            orci rhoncus iaculis.<br/> <br/>
          </Box>

          <Box 
            sx={{
              marginTop: 2,
            }}
            component="p"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            consequat pharetra sapien bibendum congue. Ut eget nisl sit amet
            orci viverra elementum. Maecenas vitae malesuada nisi. Aenean
            finibus quam eget est suscipit, et luctus turpis tristique. Cras
            sagittis faucibus maximus. Aliquam erat volutpat. Ut ac sapien ac
            orci rhoncus iaculis. <br/> <br/>
          </Box>

          <Box
            sx={{
              marginTop: 2,
            }}
            component="p"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            consequat pharetra sapien bibendum congue. Ut eget nisl sit amet
            orci viverra elementum. Maecenas vitae malesuada nisi. Aenean
            finibus quam eget est suscipit, et luctus turpis tristique. Cras
            sagittis faucibus maximus. Aliquam erat volutpat. Ut ac sapien ac
            orci rhoncus iaculis.
          </Box>
        </Box>

        <Carousel
          sx={{
            width: 800,
            height: 500,
            marginTop: 1,
            boxShadow: "0px 0px 18px -5px rgba(79, 166, 234, 0.6)",
            overflow: "hidden",
          }}
          indicators={false}
          autoPlay={600}
          swipe={true}
          cycleNavigation={true}
          animation="fade"
          navButtonsAlwaysVisible={false}
          navButtonsAlwaysInvisible={false}
        >
          {imageData.map((item, index) => (
            <Box
              key={index}
              sx={{
                width: "100%",
                height: "100%",
              }}
            >
              <img
                src={item.image}
                alt={index}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "50%, 50%",
                }}
              />
            </Box>
          ))}
        </Carousel>
      </Box>

      {/* Service */}

      <Box
        sx={{
          padding: 4,
        }}
        component="section"
      >
        <Box
          sx={{
            fontSize: 18,
            fontWeight: 600,
            textAlign: "left",
            marginLeft: 5,
            marginBottom: 1,
            color: "#444",
          }}
          component="h4"
        >
          We Strive to
        </Box>

        <Box
          component="h5"
          sx={{
            fontSize: 24,
            marginLeft: 5,
            marginBottom: 5,
            textAlign: "left",
            color: "rgb(1, 154, 204)",
          }}
        >
          DISCOVER OUR EXPERTISE
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {serviceData.map((item, index) => (
            <Paper
              sx={{
                width: 400,
                padding: 2,
                textAlign: "left",
                marginBottom: 4,
                marginLeft: 2,
              }}
              elevation={4}
              key={index}
            >
              <Box
                sx={{
                  fontWeight: "bold",
                  color: "#444",
                  fontSize: 22,
                  marginBottom: 1,
                }}
                component="h5"
              >
                {item.title}
              </Box>

              <Box
                sx={{
                  color: "#444",
                  fontSize: 14,
                }}
                component="p"
              >
                {item.description}
              </Box>

              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                  marginTop: 2,
                }}
              >
                <img
                  style={{
                    width: 70,
                  }}
                  src={item.images}
                  alt={index}
                />

                <Button
                  variant="outlined"
                  sx={{
                    color: "rgb(1, 154, 204)",
                  }}
                >
                  Use Now
                </Button>
              </Box>
            </Paper>
          ))}
        </Box>
      </Box>

      {/*Profuct category */}

      <section>
      <div   className="product-wrap"> 
        <Title level={4} style={{ fontSize: 20, fontWeight: 600, textAlign: "left",  color: "#444" }}>
          Mahsulotlar
        </Title>
        <Title  level={4} style={{ fontSize: 28, fontWeight: 600, textAlign: "left",marginBottom: 15, color: "rgb(1, 154, 204)" }}>
        DISCOVER OUR EXPERTISE
        </Title>
        <Row gutter={[16, 16]}>
          {productData.map((item, index) => (
            <Col xs={24} sm={12} md={8} key={index}>
              <Card hoverable className="custom-card">
                <div className="card-cover">
                  <img className="card-img" src={item.image} alt={`Feature ${index}`} />
                  <div className="card-title">
                    <Title level={4} className="card-title-text" >
                      {item.title}
                    </Title>
                  </div>
                </div>
                <div className="card-hover-content">
                  <Paragraph className="card-description">{item.description}</Paragraph>
                  <Button type="primary" className="card-button" style={{ backgroundColor: "#1a8ebc99", color: " #fff" }}>
                    {item.link}
                  </Button>
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="products-btn">
        <button>
          All products
        </button>
      </div>
      </div>
      </section>

      {/* News*/}
      <section >
          <div className="news-wrap">
          <div className="content-box">
            <h2 className="section-title1">Yangiliklar</h2>

            <h4 className="section-title">Lorem ipsum dolor.</h4>

            <div className="grid-container ">
              {newsData.map((item, index) => (

               
                <div

                  className={`card-article  ${
                    index === 0
                      ? "card-featured"
                      : index === 3
                      ? "card-full-width"
                      : "card-small"
                  } ${
                    index %4==0 && 'card-end'
                  }` 
                }
                  key={index}
                >
                  <img
                    className={`card-img ${
                      index === 0 || index === 3 ? "card-img-short" : ""
                    }`}
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
          <div className="products-btn">
        <button>
          All News
        </button>
   
        </div>
          </div>
        
      </section>

        {/* Video shorts*/}
        <section>
       <div className="video-wrap">
       <div className="video-text">
            <h2>Videolar</h2>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h3>
          </div>
          <div id="app">
            <Swiper
              style={swiperStyle}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                
              }}
              effect={"coverflow"}
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
              loop={true}
              navigation={true}
              modules={[EffectCoverflow, Navigation, Autoplay, Parallax]}
              className="mySwiper"
            >
              {videos.map((video, index) => (
                <SwiperSlide key={index} className={"swiper-fixed-width-100 "}>
                  <div
                    className="video-slide"
                    onClick={() => handleIframeClick(index)}
                  >
                    <img
                      src={`https://img.youtube.com/vi/${video.id}/0.jpg`}
                      alt={video.name}
                    />
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
          <div className="products-btn">
        <button>
          All video
        </button>
          </div>
        
       </div>
          
       
      </section>

         {/* Contact */}

         <section>
         <div className="contact-page">
    <h1>Contact Us</h1>
    <h2> Biz bilan aloqaga chiqish uchun</h2>
    <div className="contact-info">
      <div className="info-block">
        <EnvironmentOutlined className="icon" />
        <p>1'st Floor, Vincent Plaza, Kuzhithurai, Tamilnadu - 629 163</p>
      </div>
      <div className="info-block">
        <MailOutlined className="icon" />
        <p>sales@smarteyeapps.com</p>
        <p>support@smarteyeapps.com</p>
      </div>
      <div className="info-block">
        <PhoneOutlined className="icon" />
        <p>+912 344 43434 443</p>
        <p>+041 3434 4343 43</p>
      </div>
    </div>
    <Row gutter={[16, 16]} style={{ marginTop: '16px' }}>
      <Col xs={24} md={12}>
        <Card className="contact-form">
          <h2>Contact Form</h2>
          <ContactForm />
        </Card>
      </Col>
      <Col xs={24} md={12}>
        <Card className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.584582726008!2d76.74410247582311!3d10.75724736116471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba86ff890afff2d%3A0xd6b6e5e9b3b0e041!2sKuzhithurai%2C%20Tamil%20Nadu%20629163!5e0!3m2!1sen!2sin!4v1650945342063!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            title="map"
            style={{ border: 0 }}
          ></iframe>
        </Card>
      </Col>
    </Row>
          </div>
         </section>

          {/* Partners */}
          <section className="partners-section">
      <div className="container">
        <h2>Mahalliy hamkorlar</h2>
        <Row gutter={[16, 16]} justify="center">
          {[Sux, Bkpi, Iroq, Muhum ,Suv].map((src, index) => (
            <Col key={index} xs={24} sm={12} md={8} lg={6} xl={6}>
              <Card
                hoverable
                cover={<img src={src} alt="logo" className="partner-logo" />}
              >
                <Card.Meta title="Company Name" description="Description" />
              </Card>
            </Col>
          ))}
        </Row>
        <Row gutter={[24, 24]} justify="center">
          {[,].map((src, index) => (
            <Col key={index} xs={24} sm={12} md={8} lg={6} xl={6}>
              <Card
                hoverable
                cover={<img src={src} alt="logo" className="partner-logo" />}
              >
                <Card.Meta title="Company Name" description="Description" />
              </Card>
            </Col>
          ))}
        </Row>
        <h2>Xorijiy Hamkorlar</h2>
        <Row gutter={[24, 24]} justify="center">
          {[Sisgeo, Taliho, Xylem, Winshef ,Panda ,Dyp , Daxi].map((src, index) => (
            <Col key={index} xs={24} sm={12} md={8} lg={6} xl={6}>
              <Card
                hoverable
                cover={<img src={src} alt="logo" className="partner-logo" />}
              >
                <Card.Meta title="Company Name" description="Description" />
              </Card>
            </Col>
          ))}
        </Row>
        <Row gutter={[24, 24]} justify="center">
          {[ ].map((src, index) => (
            <Col key={index} xs={24} sm={12} md={8} lg={6} xl={6}>
              <Card
                hoverable
                cover={<img src={src} alt="logo" className="partner-logo" />}
              >
                <Card.Meta title="Company Name" description="Description" />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
    </>
  );
}

export default Index;
