import React from "react";
import { Container } from "@containers";
import { Typography, Row, Col, Button, Card } from "antd";

import "./style.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";

// Images
import Smartwater from "../../assets/images/smartwater.jpg";
import Smartwell from "../../assets/images/smartwell.jpg";
import Vertushka from "../../assets/images/vertushka.jpg";
import Piezometr from "../../assets/images/piezometr.jpg";
import Smartchannel from "../../assets/images/smartchannel.jpg";

const { Title, Paragraph } = Typography;

const productData = [
  {
    title: "Smart Water",
    description: "Suv sathi va uning sarfini onlayn monitoring qilish qurilmasi",
    image: Smartwater,
    link: "Batafsil",
  },
  {
    title: "Smart Well",
    description: "Quduqlarda suv sho’rlanishini o'lchash va suv sathini hisoblash imkoniyatiga ega.",
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
    description: "Suv oqimi tezligi va sathini o'lchash imkoniyatiga ega.",
    image: Vertushka,
    link: "Batafsil",
  },
  {
    title: "Smart Channel",
    description: "Smart channel - bu aqlli suv o’lchash qurilmasi bo’lib asosan kichik kanallardagi suv sarfini o’lchash uchun mo’ljallangan.",
    image: Smartchannel,
    link: "Batafsil",
  },
  {
    title: "Smart Water",
    description: "Suv sathi va uning sarfini onlayn monitoring qilish qurilmasi",
    image: Smartwater,
    link: "Batafsil",
  },
  {
    title: "Smart Well",
    description: "Quduqlarda suv sho’rlanishini o'lchash va suv sathini hisoblash imkoniyatiga ega.",
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
    description: "Suv oqimi tezligi va sathini o'lchash imkoniyatiga ega.",
    image: Vertushka,
    link: "Batafsil",
  },
];

function Index() {
  return (
    <>
      <section id="gratis1">
        <Container>
          <div className="custom-container">
            <Title level={4} className="custom-section-title">
              Mahsulotlar
            </Title>
            <Title level={4} style={{ fontSize: 28, fontWeight: 600, textAlign: "left",marginBottom: 15, color: "rgb(1, 154, 204)" }} className="custom-section-subtitle">
              DISCOVER OUR EXPERTISE
            </Title>
            <Row gutter={[16, 16]}>
              {productData.map((item, index) => (
                <Col xs={24} sm={12} md={8} key={index}>
                  <Card hoverable className="custom-card">
                    <div className="card-cover">
                      <img className="card-img" src={item.image} alt={`Feature ${index}`} />
                      <div className="card-title">
                        <Title level={4} className="card-title-text">
                          {item.title}
                        </Title>
                      </div>
                    </div>
                    <div className="card-hover-content">
                      <Paragraph className="card-description">{item.description}</Paragraph>
                      <Button  className="card-button">
                        {item.link}
                      </Button>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Index;
