
import React, { useRef } from 'react';
import { Container } from "@containers";
import { Carousel, Typography ,Row, Col, Button, Card } from "antd";
import { Swiper, SwiperSlide } from 'swiper/react';

//style
import "./style.scss";

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

const { Title, Paragraph } = Typography;
const items = [
  {
    bgImage: Corusle1,
    description:
      "«Smart Solutions System» aqlli texnologiyalarni joriy qilishda O'zbekistondagi yetakchi kompaniyalardan biri hisoblanadi. Suv inshootlari, nasos stansiyalari, gidro uzellar va suv omborlarini avtomatlashtirish va monitoring qilish kompaniyaning asosiy yo’nalishlaridan biri.",
    title: "Innovatsiya, sifat va ishonchlilik kelajakni belgilaydi!",
    buttonText: "Batafsil",
  },
  {
    bgImage: Corusle2,
    description:
      "«Smart Solutions System» aqlli texnologiyalarni joriy qilishda O'zbekistondagi yetakchi kompaniyalardan biri hisoblanadi. Suv inshootlari, nasos stansiyalari, gidro uzellar va suv omborlarini avtomatlashtirish va monitoring qilish kompaniyaning asosiy yo’nalishlaridan biri.",
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
      description:
        "Qurilma quduqlarda suv sathini o’lchash uchun ishlatiladi.",
      image: Piezometr,
      link: "Batafsil",
    },
    {
      title: "Vertushka",
      description:
        "Suv oqimi tezligi va sathini o'lchash imkoniyatiga ega. ",
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
//videos
  const videos = [
    { id: 'AXOEeI5ZpRc?si=mwMkVMuEpahfqMWh-VE', name: 'Mike', title: 'Fashion Director' },
    { id: 'KmYBFeRtJiU?si=Vtbsa8j8jcZBPMps', name: 'Samite', title: 'Designer' },
    { id: 'OQIjjNkmznY?si=jkPtYjUGlxHiu5PA', name: 'Kaity', title: 'Fashion Director' },
    { id: 'sE_GVLjh-4o?si=gOjB5XT4S4FOl2TM', name: 'Oakes', title: 'Photographer' },
    { id: 'feYodaCJjfY?si=iLTpT7iABlt8RrnV', name: 'Lauren', title: 'Model' },
    { id: 'SC7Z4psEISo?si=qumnvw_M42rQXREa', name: 'Ryan', title: 'Stylist' },
    { id: 'dA8KNJ2OeX8?si=uh4_XMSTHvcXLIHR', name: 'Ryan', title: 'Stylist' },
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
                    color: "#1c1e53",
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
            <Title level={4} style={{ fontSize: 30, fontWeight: 600, textAlign: 'left', marginLeft: 5, marginBottom: 50, color: '#0099ff' }}>
            Mahsulotlar
            </Title>
            {/* <Title level={5} style={{ fontSize: 24, marginLeft: 5, marginBottom: 5, textAlign: 'left', color: 'rgb(1, 154, 204)', textTransform: 'uppercase' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas risus sapien, posuere ac iaculis sed.
            </Title> */}
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