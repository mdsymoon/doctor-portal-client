
import React from "react";
import { Form ,Button } from "react-bootstrap";
import "./Contact.css";

const ContactUs = () => {
  return (
    <section className="contact-area p-5 my-5 ">
      <div className="container">
        <h3 className="text-center info-text mb-3">CONTACT US </h3>
        <h1 className="text-center text-white mb-5">Always Connect With Us</h1>

        <div>
          <Form>
            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
              <Form.Control type="email" placeholder="Email Address*" />
            </Form.Group>
            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
              <Form.Control type="email" placeholder="Subject*" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              
              <Form.Control as="textarea" placeholder="Your Message*" rows={5} />
            </Form.Group>
            <Button className="info-button ">Submit</Button>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
