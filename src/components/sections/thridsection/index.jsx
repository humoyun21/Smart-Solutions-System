import React from "react";
import "./style.scss";
import { Container } from "@containers";
import { Form, Input, Select, Button, Row, Col } from "antd";

const { TextArea } = Input;
const { Option } = Select;

const Index = () => {
    return (
        <section id="smart" className="smart-section">
            <Container>
                <div className="speak">
                    <div className="speak-form">
                        <h2>SPEAK WITH AN EXPERT</h2>
                        <p>If you are looking for technical support, please click here.</p>
                        <Form layout="vertical">
                            <Row gutter={16}>
                                <Col xs={24} md={12}>
                                    <Form.Item
                                        label="First Name *"
                                        name="firstName"
                                        rules={[{ required: true, message: 'Please input your first name!' }]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} md={12}>
                                    <Form.Item
                                        label="Last Name *"
                                        name="lastName"
                                        rules={[{ required: true, message: 'Please input your last name!' }]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={16}>
                                <Col xs={24} md={12}>
                                    <Form.Item
                                        label="Email *"
                                        name="email"
                                        rules={[
                                            { required: true, message: 'Please input your email!' },
                                            { type: 'email', message: 'The input is not valid E-mail!' }
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} md={12}>
                                    <Form.Item
                                        label="Phone *"
                                        name="phone"
                                        rules={[{ required: true, message: 'Please input your phone number!' }]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Form.Item
                                label="Company name *"
                                name="companyName"
                                rules={[{ required: true, message: 'Please input your company name!' }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Country *"
                                name="country"
                                rules={[{ required: true, message: 'Please select your country!' }]}
                            >
                                <Select>
                                    <Option value="Uzbekistan">Uzbekistan</Option>
                                    <Option value="USA">USA</Option>
                                    <Option value="Russia">Russia</Option>
                                    {/* Add more options as needed */}
                                </Select>
                            </Form.Item>
                            <Form.Item
                                label="How can we help you? *"
                                name="help"
                                rules={[{ required: true, message: 'Please input your message!' }]}
                            >
                                <TextArea rows={4} />
                            </Form.Item>
                            <Form.Item
                                label="Sector(s) of Interest *"
                                name="sector"
                                rules={[{ required: true, message: 'Please select your sector(s) of interest!' }]}
                            >
                                <Select mode="multiple">
                                    <Option value="Construction">Construction</Option>
                                    <Option value="Engineering">Engineering</Option>
                                    <Option value="IT">IT</Option>
                                    {/* Add more options as needed */}
                                </Select>
                            </Form.Item>
                            <Form.Item className="speak-forms-btn">
                                <Button type="primary" htmlType="submit">Submit</Button>
                            </Form.Item>
                        </Form>
                    </div>
                    <div className="speak-about">
                        <h2>
                            RST has been one of our trusted partners for years in providing solutions to a wide range of our instrumentation needs—from the prompt shipment of piezometers and inclinometer casing, to the annual calibration of our inclinometer systems. RST takes the time to learn about our projects and provides value by collaborating with us on our monitoring strategy.
                            <br />
                            - Elke Declercq, Geotechnical Dept – Flemish Government
                        </h2>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Index;
