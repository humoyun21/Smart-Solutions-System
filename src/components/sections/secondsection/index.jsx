import "./style.scss";
import { Container } from "@containers";

import Icon1 from "../../../assets/images/icon1.svg";
import Icon2 from "../../../assets/images/icon2.svg";
import Icon3 from "../../../assets/images/icon3.svg";
import Icon4 from "../../../assets/images/icon4.svg";
import Woman from "../../../assets/images/woman.jpg";
import Feature1 from "../../../assets/images/featured1.jpg";
import Feature2 from "../../../assets/images/featured2.jpg";
import Feature3 from "../../../assets/images/featured3.jpg";
import { Row, Col, Button, Card } from 'antd';
import { Box, Typography } from "@mui/material";


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


function Index() {
    return (

        <>

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
  <Box
    sx={{
      
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
      risus sapien, posuere ac iaculis sed .
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

              <Typography className="card__button" component="p">
              {item.link}
              </Typography>

              
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
}

export default Index;
