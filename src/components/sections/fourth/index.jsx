import React, { useState } from "react";
import "./style.scss";
import { Container } from "@containers";
import { Box, Typography } from "@mui/material";
import { Row, Col } from "antd";
import Feature1 from "../../../assets/images/feature.jpg";
import Feature2 from "../../../assets/images/featured1.jpg";
import Feature3 from "../../../assets/images/featured2.jpg";

const productData = [
  {
    title: "Hymn to the United Nations",
    description:
      "Get inspired by this revived W.H. Auden's Hymn to the United Nations. Let music for peace Be the paradigm, For peace means to change At the right time, As the World-Clock, Goes Tick and Tock.So maythe story Of our human city Presently move Get inspired by this revived W.H. Auden's Hymn to the United Nations. Let music for peace Be the paradigm, For peace means to change At the right time, As the World-Clock, Goes Tick and Tock.So maythe story Of our human city Presently move Get inspired by this revived W.H. Auden's Hymn to the United Nations. Let music for peace Be the paradigm, For peace means to change At the right time, As the World-Clock, Goes Tick and Tock.So maythe story Of our human city Presently move",
    image: Feature1,
    link: "Read more",
  },
  {
    title: "A symbol of hope for global unity",
    description:
      "In 1945, representatives of 50 countries met in Sanancisco at the United Nations Conference on International Organization to draw up the United  Nations Charter. The United Nations officially came into existence on 24 October 1945 Get inspired by this revived W.H. Auden's Hymn to the United Nations. Let music for peace Be the paradigm, For peace means to change At the right time, As the World-Clock, Goes Tick and Tock.So maythe story Of our human city Presently move Get inspired by this revived W.H. Auden's Hymn to the United Nations. Let music for peace Be the paradigm, For peace means to change At the right time, As the World-Clock, Goes Tick and Tock.So maythe story Of our human city Presently move",
    image: Feature2,
    link: "Read more",
  },
  {
    title: "How it Started?",
    description:
      "In 1945, representatives of 50 countries met in Sanancisco at the United Nations Conference on International Organization to draw up the United  Nations Charter. The United Nations officially came into existence on 24 October 1945 Get inspired by this revived W.H. Auden's Hymn to the United Nations. Let music for peace Be the paradigm, For peace means to change At the right time, As the World-Clock, Goes Tick and Tock.So maythe story Of our human city Presently move Get inspired by this revived W.H. Auden's Hymn to the United Nations. Let music for peace Be the paradigm, For peace means to change At the right time, As the World-Clock, Goes Tick and Tock.So maythe story Of our human city Presently move",
    image: Feature3,
    link: "Read more",
  },
  {
    title: "Hymn to the United ",
    description:
      "Get inspired by this revived W.H. Auden's Hymn to the United Nations. Let music for peace Be the paradigm, For peace means to change At the right time, As the World-Clock, Goes Tick and Tock.So maythe story Of our human city Presently move Get inspired by this revived W.H. Auden's Hymn to the United Nations. Let music for peace Be the paradigm, For peace means to change At the right time, As the World-Clock, Goes Tick and Tock.So maythe story Of our human city Presently move Get inspired by this revived W.H. Auden's Hymn to the United Nations. Let music for peace Be the paradigm, For peace means to change At the right time, As the World-Clock, Goes Tick and Tock.So maythe story Of our human city Presently move",
    image: Feature1,
    link: "Read more",
  },
];

const Index = () => {
  const [selectedCard, setSelectedCard] = useState(productData[0]);

  const handleCardClick = (clickedCard) => {
    setSelectedCard(clickedCard);
  };

  const truncateDescription = (description, length) => {
    return description.length > length ? description.substring(0, length) + "..." : description;
  };

  return (
    <>
      <section id="gratis1">
        <Container>
          <Box
            sx={{
              bgcolor: "white",
              padding: 4,
              borderRadius: 2,
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              marginBottom: 4,
            }}
            className="container"
            component="section"
          >
            <Typography
              component="h4"
              sx={{
                fontSize: 18,
                fontWeight: 600,
                textAlign: "left",
                marginBottom: 2,
                color: "#0099ff",
              }}
            >
              Yangiliklar
            </Typography>

            <Typography
              sx={{
                fontSize: 24,
                marginBottom: 5,
                textAlign: "left",
                color: "rgb(1, 154, 204)",
                textTransform: "uppercase",
              }}
              component="h5"
            >
             
            </Typography>

            <Row gutter={[16, 16]}>
              <Col xs={24} md={16}>
                <Box
                  className="selected__card"
                  sx={{
                    bgcolor: "#f9f9f9",
                    padding: 4,
                    borderRadius: 2,
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <img
                    className="selected__img"
                    src={selectedCard.image}
                    alt={`Selected Feature`}
                  />
                  <Box className="selected__data">
                    <Typography className="selected__title" component="h4">
                      {selectedCard.title}
                    </Typography>

                    <Typography
                      className="selected__description"
                      component="p"
                    >
                      {selectedCard.description}
                    </Typography>
                  </Box>
                </Box>
              </Col>
              <Col xs={24} md={8}>
                <Row gutter={[16, 16]}>
                  {productData
                    .filter((item) => item !== selectedCard)
                    .map((item, index) => (
                      <Col xs={24} sm={12} key={index}>
                        <Box
                          className="card__article"
                          onClick={() => handleCardClick(item)}
                        >
                          <img
                            className="card__img"
                            src={item.image}
                            alt={`Feature ${index}`}
                          />
                          <Box className="card__data">
                            <Typography
                              className="card__title"
                              component="h4"
                            >
                              {item.title}
                            </Typography>

                            <Typography
                              className="card__description"
                              component="p"
                            >
                              {truncateDescription(item.description, 50)}
                            </Typography>

                            <Typography
                              className="card__button"
                              component="p"
                              onClick={() => handleCardClick(item)}
                            >
                              {item.link}
                            </Typography>
                          </Box>
                        </Box>
                      </Col>
                    ))}
                </Row>
              </Col>
            </Row>
          </Box>
        </Container>
      </section>
    </>
  );
};

export default Index;
