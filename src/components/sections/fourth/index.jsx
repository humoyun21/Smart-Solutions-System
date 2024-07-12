import React from "react";
import "./style.scss";
import { Container } from "@containers";
import { Box, Typography } from "@mui/material";
import { Row, Col } from "antd";
// import { Link } from "react-router-dom";
import Feature1 from "../../../assets/images/feature.jpg";
import Feature2 from "../../../assets/images/featured1.jpg";
import Feature3 from "../../../assets/images/featured2.jpg";

const productData = [
  {
    title: "Hymn to the United Nations",
    description:
      "Get inspired by this revived W.H. Auden's Hymn to the United Nations. Let music for peace Be the paradigm, For peace means to change At the right time, As the World-Clock, Goes Tick and Tock.So maythe story Of our human city Presently move",
    image: Feature1,
    link: "/read-info",
  },
  {
    title: "A symbol of hope for global unity",
    description:
      "In 1945, representatives of 50 countries met in Sanancisco at the United Nations Conference on International Organization to draw up the United  Nations Charter. The United Nations officially came into existence on 24 October 1945",
    image: Feature2,
    link: "/read-info",
  },
  {
    title: "How it Started?",
    description:
      "In 1945, representatives of 50 countries met in Sanancisco at the United Nations Conference on International Organization to draw up the United  Nations Charter. The United Nations officially came into existence on 24 October 1945",
    image: Feature3,
    link: "/read-info",
  },
];

const Index = () => {
  return (
    <>
      <section id="gratis1">
        <Container>
          <Box
            sx={{
              bgcolor: 'white',
              padding: 10,
              borderRadius: 2
            }}
            className="container" component="section">
            <Typography
              component="h4"
              sx={{
                fontSize: 18,
                fontWeight: 600,
                textAlign: "left",
                marginLeft: 5,
                marginBottom: 1,
                color: "#0099ff",
              }}
            >
              Our product 
            </Typography>

            <Typography
              sx={{
            
                fontSize: 24,
                marginLeft: 5,
                marginBottom: 5,
                textAlign: "left",
                color: "rgb(1, 154, 204)",
                textTransform: "uppercase",
              }}
              component="h5"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              risus sapien, posuere ac iaculis sed.
            </Typography>

            <Row gutter={[16, 16]}>
              {productData.map((item, index , ) => (
                <Col xs={24} sm={12} md={8} key={index}>
                  <Box className="card__article">
                    <img className="card__img" src={item.image} alt={`Feature ${index}`} />
                    <Box className="card__data">
                      <Typography className="card__title" component="h4">
                        {item.title}
                      </Typography>

                      <Typography className="card__description" component="p">
                        {item.description}
                      </Typography>

                      {/* <Link className="card__button" to={item.link}>
                        {item.link}
                      </Link> */}
                    </Box>
                  </Box>
                </Col>
              ))}
            </Row>


       
          </Box>
        </Container>
      </section>
    </>
  );
};

export default Index;
