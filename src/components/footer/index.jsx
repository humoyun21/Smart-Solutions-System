import "./style.scss";
import { Container } from "@containers";
import { Input, Row, Col } from 'antd';
import { SendOutlined, FacebookOutlined, TwitterOutlined, YoutubeOutlined, InstagramOutlined } from '@ant-design/icons';
import Water from "../../assets/images/logo1.svg";

const Index = () => {
    return (
        <footer className="footer">
            
                <Row className="wrap" justify="space-between" align="middle">
                    <Col xs={24} md={12} className="wrap-send">
                        <h2>NO CREDIT CARD REQUIRED</h2>
                        <h3>Start using Avo today.</h3>
                        <form action="">
                            <div className="wrap-send-email">
                                <Input 
                                    type="email" 
                                    placeholder="Your Email" 
                                    suffix={<SendOutlined />} 
                                />
                            </div>
                        </form>
                    </Col>
                    <Col  className="wrap-photo">
                        <img src={Water} alt="Water" />
                    </Col>
                </Row>
                
                <Row className="info" gutter={[16, 16]}>
                    <Col xs={24} md={6} className="info-about">
                        <h2>Smart Solutions System</h2>
                        <p>Make the right data-driven decisions that move your business.</p>
                    </Col>
                    <Col xs={24} md={6} className="info-jobs">
                        <h3>About</h3>
                        <p>Jobs</p>
                        <p>Jobs</p>
                    </Col>
                    <Col xs={24} md={6} className="info-privacy">
                        <h3>Terms and Conditions</h3>
                        <p>Privacy Policy</p>
                        <p>Cookie Policy</p>
                    </Col>
                    <Col xs={24} md={6} className="info-contact">
                        <h3>Let's chat!</h3>
                        <div className="social-icons">
                             <InstagramOutlined />
                             <YoutubeOutlined />
                            <FacebookOutlined />
                            <TwitterOutlined />
                           
                            
                        </div>
                    </Col>
                </Row>
            
        </footer>
    );
};

export default Index;
