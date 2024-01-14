import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

const Contact = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    number: null,
    message: "",
  });

  //   functions
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("SUBMIT", { ...inputs });
  };

  return (
    <section id="contact" className="block contact-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Contact us</h2>
          <div className="subtitle">get connected with us</div>
        </div>
        <Form className="contact-form" onSubmit={handleSubmit}>
          <Row>
            <Col sm={4}>
              <Form.Control
                type="text"
                placeholder="Enter your full name"
                name="name"
                value={inputs.name}
                required
                onChange={handleInput}
              />
            </Col>
            <Col sm={4}>
              <Form.Control
                type="email"
                placeholder="Enter your email address"
                name="email"
                value={inputs.email}
                required
                onChange={handleInput}
              />
            </Col>
            <Col sm={4}>
              <Form.Control
                type="tel"
                placeholder="Enter your contact number"
                name="number"
                value={inputs.number}
                required
                onChange={handleInput}
              />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Form.Control
                as="textarea"
                placeholder="Enter your contact message"
                name="message"
                value={inputs.message}
                onChange={handleInput}
                required
              />
            </Col>
          </Row>
          <div className="btn-holder">
            <Button type="submit">Submit</Button>
          </div>
        </Form>
      </Container>
      <div className="google-map">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1388.4299388729537!2d123.60468813860649!3d-10.174729964623179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2c569ca7d2b29f35%3A0x32bc7fe4a8a598d1!2sKejaksaan%20Tinggi%20NTT!5e0!3m2!1sid!2sid!4v1705192129170!5m2!1sid!2sid"
        ></iframe>
      </div>
      <Container fluid>
        <div className="contact-info">
          <ul>
            <li>
              <i className="fas fa-envelope"></i>
              admin@domain.com
            </li>
            <li>
              <i className="fas fa-phone"></i>
              123-456-7890
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              Kupang, East Nusa Tenggara
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
