import React from "react";
import { Row, Col, Card, Form, Input, Button } from "antd";
import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Box } from "@mui/material";
import "./style.scss";

const ContactForm = () => (
  <Form layout="vertical">
    <Form.Item
      style={{
        marginBottom: 10,
      }}
      label="FISH"
      name="fullname"
      rules={[{ required: true, message: "Please enter your full name!" }]}
    >
      <Input
        style={{
          height: 40,
        }}
      />
    </Form.Item>
    <Form.Item
      style={{
        marginBottom: 10,
      }}
      label="Telefon raqam"
      name="mobile"
      rules={[{ required: true, message: "Please enter your mobile number!" }]}
    >
      <Input
        style={{
          height: 40,
        }}
      />
    </Form.Item>
    <Form.Item
      style={{
        marginBottom: 10,
      }}
      label="Elektron pochta"
      name="email"
      rules={[
        {
          required: true,
          message: "Please enter a valid email address!",
          type: "email",
        },
      ]}
    >
      <Input
        style={{
          height: 40,
        }}
      />
    </Form.Item>
    <Form.Item label="Takliflar yoki savollar" name="address">
      <Input.TextArea
        style={{
          minHeight: 120,
        }}
      />
    </Form.Item>

    <Form.Item>
      <Button
        style={{
          background: "rgb(1, 154, 204)",
          width: "100%",
          padding: 1,
          color: "#fff",
          height: 40,
        }}
        htmlType="submit"
      >
        Submit
      </Button>
    </Form.Item>
  </Form>
);

const Index = () => (
  <div className="contact-page">
    <Box
      sx={{
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 2,
      }}
      component="h4"
    >
      Biz bilan aloqa
    </Box>

    <Box
      sx={{
        marginTop: 2,
        fontSize: 24,
        color: "rgb(1, 154, 204)",
        textTransform: "uppercase",
        width: 700,
        marginBottom: 2,
        marginLeft: 2,
      }}
      component="h5"
    >
      Sizni qiziqtirgan barcha savollar va takliflar bilan murojat qilishingiz
      mumkin
    </Box>
    <div className="contact-info">
      <div className="info-block">
        <EnvironmentOutlined className="icon" />
        <p>Mo‘ynoq ko'chasi 249, Тоshkent, O'zbekiston</p>
      </div>
      <div className="info-block">
        <MailOutlined className="icon" />
        <p>sales@smarteyeapps.com</p>
        <p>support@smarteyeapps.com</p>
      </div>
      <div className="info-block">
        <PhoneOutlined className="icon" />
        <p>+912 344 43434 443</p>
        <p>+041 3434 4343 43</p>
      </div>
    </div>
    <Row gutter={[16, 16]} style={{ marginTop: "16px" }}>
      <Col xs={24} md={12}>
        <Card className="contact-form">
          <ContactForm />
        </Card>
      </Col>
      <Col xs={24} md={12}>
        <Card className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2999.026818577444!2d69.32957067591194!3d41.26475197131571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae5fdd0efd714f%3A0xe9d97c22dd4cc803!2sSmart%20Solutions%20System!5e0!3m2!1sru!2s!4v1722216863906!5m2!1sru!2s"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            title="map"
            style={{ border: 0 }}
          ></iframe>
        </Card>
      </Col>
    </Row>
  </div>
);

export default Index;
