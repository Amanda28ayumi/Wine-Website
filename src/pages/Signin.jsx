import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import { useState } from 'react'

export function Login( props ) {
    document.title = "Sign into the account"
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
                        <h2>Sign in</h2>
                        <Form.Group controlId="validationCustomUsername">
                            <Form.Label>Username</Form.Label>
                            <InputGroup hasValidation> 
                            <InputGroup.Text id="inputGroupPretend">@</InputGroup.Text>
                            <Form.Control name="username" type="text" placeholder="username" required/>
                            <Form.Control.Feedback type="invalid">
                                Please write your username.
                            </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group controlId="validationCustom01">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name="email" type="email" required/>
                        </Form.Group>
                        <Form.Group controlId="validationCustom02">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" type="password" required/>
                        </Form.Group>
                        <Button className="mt-4" variant="primary" type="submit">
                            Sign in
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}