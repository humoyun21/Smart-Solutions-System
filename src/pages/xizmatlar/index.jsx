import React from "react";
import { Row, Col, Card } from "antd";
import "./style.scss";
import { Container } from "@containers";
// images
import avtomat from "../../assets/images/avtomat.jpg";
import melirotsiya from "../../assets/images/melirotsiya.jpg";
import quyoshpanellari from "../../assets/images/quyoshpanellari.jpeg";
import standart from "../../assets/images/standart.jpg";
import suvolchash from "../../assets/images/suvolchash.jpg";
import suvombor from "../../assets/images/suvombor.png";


const { Meta } = Card;

function Index() {
  const cardData = [
    { img: avtomat, title: "Avtomat", description: "This is a description for Avtomat." },
    { img: melirotsiya, title: "Melirotsiya", description: "This is a description for Melirotsiya." },
    { img: quyoshpanellari, title: "Quyosh Panellari", description: "This is a description for Quyosh Panellari." },
    { img: standart, title: "Standart", description: "This is a description for Standart." },
    { img: suvolchash, title: "Suvolchash", description: "This is a description for Suvolchash." },
    { img: suvombor, title: "Suvombor", description: "This is a description for Suvombor." },
  ];

  return (

<>
<Container>
  
<Row gutter={24}>
      <Col span={24}>
        <Card className="custom-card1">
          <div className="card-body">
            <div className="service-photo">
              <img src={suvombor} alt="Service" />
            </div>
            <div className="service-text">
              <h1>Lorem ipsum dolor sit amet</h1>
              <h2>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur magnam ut architecto doloremque reiciendis perferendis maxime sed, similique aliquam, sint rerum expedita consequatur totam, veniam ipsam quam ducimus inventore at! Obcaecati harum impedit iure temporibus eum aliquid nihil ducimus tempora.12 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit enim atque et necessitatibus iusto exercitationem numquam ab nobis tempora placeat eaque, sint error vel quaerat a eius molestias aspernatur velit.
              </h2>
            </div>
          </div>
        </Card>
      </Col>
    </Row>

</Container>



{/* <Container> */}


<div className="container">

<h1 className="xizmatlar">Xizamtlar :</h1>
<div className="cardswrap">
<Row gutter={[36, 16]}>
  {cardData.map((card, index) => (
    <Col
      xs={24} sm={24} md={12} lg={12}
      key={index}
      className={`card-row ${Math.floor(index / 2) % 2 === 0 ? 'left-image' : 'right-image'}`}
    >
      <Card className="custom-card">
        <div className="card-body">
          <img alt={card.title} src={card.img} className="card-image" />
          <div className="card-content">
            <h3>{card.title}</h3>
            {/* <p>{card.description}</p> */}
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi dolor voluptatibus, nulla consequatur nemo quo maiores rem nesciunt commodi vero natus eaque necessitatibus  </p>
          </div>
        </div>
      </Card>
    </Col>
  ))}
</Row>
</div>



</div>



{/* </Container> */}
  

</>
    
    
  );
}

export default Index;
