import React from "react";
import "./style.scss";
import { Container } from "@containers";
import Blog from "../../../assets/images/blog.png";
import Blog2 from "../../../assets/images/blog2.png";
import { Row, Col, Button, Form, Input } from "antd";

const Index = () => {
  return (
    <>
      <section id="gratis">
        <Container>
          <Row className="blog" gutter={[16, 16]}>
            <Col xs={24} md={12} className="blog-text">
              <h2>LATEST BLOG POST</h2>
              <h3>
                LEVERAGING SHAPEARRAY FOR WIRELESS AUTOMATED REMOTE DEFORMATION
                MONITORING
              </h3>
              <h4>
                Wireless automated remote deformation monitoring is
                transforming how engineers collect data to ensure the safety and
                durability of their projects. Through a network of
                interconnected technology, this real-time monitoring system
                delivers proactive risk management by evaluating structural and
                geog…
              </h4>
              <Button type="primary" href="#">
                Read More <i className="bi bi-arrow-right"></i>
              </Button>
            </Col>
            <Col xs={24} md={12} className="blog-photo">
              <img src={Blog} alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      <section id="gratis1">
        <Container>
          <Row className="blog" gutter={[16, 16]}>
            <Col xs={24} md={12} className="blog-photo">
              <img src={Blog2} alt="" />
            </Col>
            <Col xs={24} md={12} className="blog-text">
              <h2>LATEST SUCCESS STORY</h2>
              <h3>DEEP EXCAVATION MONITORING</h3>
              <h4>Location: Burnaby, British Columbia, Canada …</h4>
              <Button type="primary" href="#">
                Read More <i className="bi bi-arrow-right"></i>
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* <section id="last">
        <Container>
          <div className="last">
            <div>
              <h2>SUBSCRIBE</h2>
              <h3>FOR</h3>
              <h4>UPDATES</h4>
            </div>

            <div className="last-form">
              <Form layout="vertical">
                <Row gutter={[16, 16]}>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label="First Name *"
                      name="firstName"
                      rules={[
                        { required: true, message: "Please input your first name!" },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label="Last Name *"
                      name="lastName"
                      rules={[
                        { required: true, message: "Please input your last name!" },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item
                  label="Email *"
                  name="email"
                  rules={[
                    { required: true, message: "Please input your email!" },
                    { type: "email", message: "The input is not valid E-mail!" },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Subscribe
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </Container>
      </section> */}
    </>
  );
};

export default Index;
