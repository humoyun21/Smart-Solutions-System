import React from 'react';
import { Row, Col, Card, Form, Input, Button } from 'antd';
import { EnvironmentOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import './style.scss';

const ContactForm = () => (
  <Form layout="vertical">
    <Form.Item label="Full Name" name="fullname" rules={[{ required: true, message: 'Please enter your full name!' }]}>
      <Input />
    </Form.Item>
    <Form.Item label="Mobile Number" name="mobile" rules={[{ required: true, message: 'Please enter your mobile number!' }]}>
      <Input />
    </Form.Item>
    <Form.Item label="Email Address" name="email" rules={[{ required: true, message: 'Please enter a valid email address!', type: 'email' }]}>
      <Input />
    </Form.Item>
    <Form.Item label="Address" name="address">
      <Input.TextArea />
    </Form.Item>
    <Form.Item>
      <Button type="primary" htmlType="submit">Submit</Button>
    </Form.Item>
  </Form>
);

const Index = () => (
  <div className="contact-page">
    <h1>Contact Us</h1>
    <h2> Biz bilan aloqaga chiqish uchun</h2>
    <div className="contact-info">
      <div className="info-block">
        <EnvironmentOutlined className="icon" />
        <p>1'st Floor, Vincent Plaza, Kuzhithurai, Tamilnadu - 629 163</p>
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
    <Row gutter={[16, 16]} style={{ marginTop: '16px' }}>
      <Col xs={24} md={12}>
        <Card className="contact-form">
          
          <ContactForm />
        </Card>
      </Col>
      <Col xs={24} md={12}>
        <Card className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.584582726008!2d76.74410247582311!3d10.75724736116471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba86ff890afff2d%3A0xd6b6e5e9b3b0e041!2sKuzhithurai%2C%20Tamil%20Nadu%20629163!5e0!3m2!1sen!2sin!4v1650945342063!5m2!1sen!2sin"
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
