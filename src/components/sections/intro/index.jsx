import React from "react";
<<<<<<< HEAD
import { Box, Button } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { Paper, Typography } from "@mui/material";
import { styled } from "@mui/system";

import MainSection1 from "../../../assets/images/mainSection1.png";
import MainSection2 from "../../../assets/images/mainSection2.png";
import MainSection3 from "../../../assets/images/mainSection3.png";
import About1 from "../../../assets/images/about1.jpg";
import About2 from "../../../assets/images/about2.png";
import About3 from "../../../assets/images/about3.jpg";
import About4 from "../../../assets/images/about4.jpg";
import Service1 from "../../../assets/images/service1.png";
import Service2 from "../../../assets/images/service2.png";
import Service3 from "../../../assets/images/service3.png";
import Service4 from "../../../assets/images/service4.png";
import Service5 from "../../../assets/images/service5.png";
import Service6 from "../../../assets/images/service6.png";
import Product1 from "../../../assets/images/product1.jpg";
import Product2 from "../../../assets/images/product2.jpg";
import Product3 from "../../../assets/images/product3.jpg";

const StyledPaper = styled(Paper)({
  padding: "20px",
});

const items = [
  {
    bgImage: MainSection1,
=======
import "./style.scss";
import { Container } from "@containers";
import { Carousel, Typography } from "antd";
import Corusle1 from "../../../assets/images/corusel1.png";
import Corusle2 from "../../../assets/images/corusel2.png";
import Corusle3 from "../../../assets/images/corusel3.jpg";

const { Title, Paragraph } = Typography;

const items = [
  {
    bgImage: Corusle1,
>>>>>>> 4937c51 (Video and news updated)
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet.",
    title: "Lorem ipsum dolor",
    buttonText: "More Read",
  },
  {
<<<<<<< HEAD
    bgImage: MainSection2,
=======
    bgImage: Corusle2,
>>>>>>> 4937c51 (Video and news updated)
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet.",
    title: "Lorem ipsum dolor",
    buttonText: "Sale Now",
  },
  {
<<<<<<< HEAD
    bgImage: MainSection3,
=======
    bgImage: Corusle3,
>>>>>>> 4937c51 (Video and news updated)
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet.",
    title: "Lorem ipsum dolor",
    buttonText: "Contact Me",
  },
];

<<<<<<< HEAD
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

const productData = [
  {
    title: "Somthing title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate sapien et est accumsan aliquet. Proin eu ullamcorper urna, vel.",
    image: Product1,
    link: "Read Info",
  },
  {
    title: "Somthing title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate sapien et est accumsan aliquet. Proin eu ullamcorper urna, vel.",
    image: Product2,
    link: "Read Info",
  },
  {
    title: "Somthing title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate sapien et est accumsan aliquet. Proin eu ullamcorper urna, vel.",
    image: Product3,
    link: "Read Info",
  },
];

function Home() {
  return (
    <Box>
      {/* Carousel main section */}
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
              width={400}
            >
              <Typography
                component="h4"
                sx={{
                  fontSize: 60,
                  fontWeight: "bold",
                  color: "rgb(1, 154, 204)",
                  marginBottom: 5,
                }}
              >
                {item.title}
              </Typography>

              <Typography
                component="h4"
                sx={{
                  fontSize: 20,
                  fontWeight: "bold",
                  marginBottom: 4,
                  color: "#333",
                }}
              >
                {item.description}
              </Typography>

              <a
                href="/"
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
          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 600,
            }}
            component="h4"
          >
            BIZ HAQIMIZDA QISQACHA MA'LUMOT
          </Typography>

          <Typography
            sx={{
              marginTop: 2,
              fontSize: 24,
              color: "rgb(1, 154, 204)",
            }}
            component="h5"
          >
            BIZNING KOMPANIYAMIZ BILAN YAQINDAN TANISHING HAMDA O'ZINGIZ UCHUN
            FOYDALI MA'LUMOTLARNI OLING
          </Typography>

          <Typography
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
          </Typography>

          <Typography
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
          </Typography>

          <Typography
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
          </Typography>
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
        <Typography
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
        </Typography>

        <Typography
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
        </Typography>

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
              <Typography
                sx={{
                  fontWeight: "bold",
                  color: "#444",
                  fontSize: 22,
                  marginBottom: 1,
                }}
                component="h5"
              >
                {item.title}
              </Typography>

              <Typography
                sx={{
                  color: "#444",
                  fontSize: 14,
                }}
                component="p"
              >
                {item.description}
              </Typography>

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
    </Box>
  );
}

export default Home;
=======
function Index() {
  return (
    <section id="intro" className="bg-[#1C1E53] pt-[92px] pb-[132px]">
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
  );
}

export default Index;
>>>>>>> 4937c51 (Video and news updated)
