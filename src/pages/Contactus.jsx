import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import { useState } from 'react'

export function Contact( props ) {
    document.title = "Contact us"
    const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
    return(
        <Container>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <h2>Contact us</h2>
                        <Form.Group controlId="validationCustom01">
                            <Form.Label>Name</Form.Label>
                            <Form.Control name="name" type="text" placeholder="name" required/>
                        </Form.Group>
                        <Form.Group controlId="validationCustom02">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name="email" type="email" placeholder="Email address" required/>
                        </Form.Group>
                        <Form.Group controlId="validationCustom03">
                            <Form.Label>Message</Form.Label>
                            <Form.Control name="message" as="textarea" placeholder="Message" style={{ height: '100px' }} required/>
                        </Form.Group>
                        <Button className="mt-4" variant="primary" type="submit">
                            Send Message
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}