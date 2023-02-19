import React from "react";
import './Hero.css';
import { Container, Row, Col, Button } from "react-bootstrap";

const Hero = () => {
  return (
    <div className="hero">
      <Container>
        <Row>
          <Col lg={6} md={12} className="hero-text">
            <h1>Welcome to our store</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              suscipit mauris nec nibh rutrum consectetur.
            </p>
            <Button variant="primary">Shop now</Button>
          </Col>
          <Col lg={6} md={12} className="hero-image">
            <img
              src="https://via.placeholder.com/500x400.png?text=Hero+Image"
              alt="Main"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;

