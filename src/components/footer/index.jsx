import "./style.scss";
import { Input, Row, Col } from "antd";
import {
  SendOutlined,
  FacebookOutlined,
  TwitterOutlined,
  YoutubeOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import Water from "../../assets/images/logo1.svg";

const Index = () => {
  return (
    <footer className="footer">
      <Row className="wrap" justify="space-between" align="middle">
        <Col xs={24} md={12} className="wrap-send">
          <h3>Bizning jamoa bilan hamkorlik qilish uchun email kiriting</h3>
          <form action="">
            <div className="wrap-send-email">
              <Input
                type="email"
                placeholder="Email Manzilni Kiriting"
                suffix={<SendOutlined />}
              />
            </div>
          </form>
        </Col>
        <Col className="wrap-photo">
          <img src={Water} alt="Water" />
        </Col>
      </Row>

      <Row className="info" gutter={[16, 16]}>
        <Col xs={24} md={6} className="info-about">
          <p>
            Bizning jamoa siz bilan ishlashdan doimo hursand. Innovatsion
            loyihalar kelajak poydevori bo'lib hizmat qiladi
          </p>
        </Col>
        <Col xs={24} md={6} className="info-jobs">
          <h3>About</h3>
          <p>Products</p>
          <p>News</p>
        </Col>
        <Col xs={24} md={6} className="info-privacy">
          <h3>Terms and Conditions</h3>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
        </Col>
      </Row>
    </footer>
  );
};

export default Index;
