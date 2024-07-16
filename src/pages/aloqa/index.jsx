
import React from 'react';
import { Container } from "@containers";
import "./style.scss";

function Index() {
  return (
    <Container>
      <div className="contact-page">
        <div className="contact-info">
          <div className="info-block">
            <p>📍</p>
            <p>1'st Floor, Vincent Plaza, Kuzhithurai, Tamilnadu - 629 163</p>
          </div>
          <div className="info-block">
            <p>✉️</p>
            <p>sales@smarteyeapps.com</p>
            <p>support@smarteyeapps.com</p>
          </div>
          <div className="info-block">
            <p>📞</p>
            <p>+912 344 43434 443</p>
            <p>+041 3434 4343 43</p>
          </div>
        </div>
        <div className="form-and-map">
          <div className="contact-form">
            <h2>Contact Form</h2>
            <form>
              <div className="form-group">
                <label>Full Name:</label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label>Mobile Number:</label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label>Email Address:</label>
                <input type="email" />
              </div>
              <div className="form-group">
                <label>Address:</label>
                <textarea type="text"></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
          <div className="map">
            
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.584582726008!2d76.74410247582311!3d10.75724736116471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba86ff890afff2d%3A0xd6b6e5e9b3b0e041!2sKuzhithurai%2C%20Tamil%20Nadu%20629163!5e0!3m2!1sen!2sin!4v1650945342063!5m2!1sen!2sin"
              width="400"
              height="300"
              allowFullScreen=""
              loading="lazy"
              title="map"
            ></iframe>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Index;

