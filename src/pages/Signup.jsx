import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import { useState } from 'react'

export function Register(props) {
    document.title = "Sign up for an account"
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    return (
        <Container>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <h2>Sign up</h2>
                        <Form.Group controlId="validationCustomUsername">
                            <Form.Label>Username</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="inputGroupPretend">@</InputGroup.Text>
                                <Form.Control name="username" type="text" placeholder="username" required />
                                <Form.Control.Feedback type="invalid">
                                    Please choose a username.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group controlId="validationCustom01">
                            <Form.Label>Fist name</Form.Label>
                            <Form.Control name="first name" type="text" placeholder="First name" required />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="validationCustom02">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control name="last name" type="text" placeholder="Last name" required />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="validationCustom03">
                            <Form.Label>Gender</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option>Open this select menu</option>
                                <option value="1">Male</option>
                                <option value="2">Female</option>
                                <option value="3">Other</option>
                                <option value="4">Prefer not to say</option>
                            </Form.Select>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="validationCustom04">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name="email" type="email" placeholder="user@domain.com" required />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="validationCustom05">
                            <Form.Label>Phone number</Form.Label>
                            <Form.Control name="phone number" type="text" placeholder="0000-000-000" required />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="validationCustom06">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" type="password" placeholder="minimum 8 characters" required />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="validationCustom07">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control name="confirm password" type="password" placeholder="Confirm password" required />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="validationCustom08">
                            <Form.Label>Address</Form.Label>
                            <Form.Control name="address" type="text" placeholder="street" required />
                            <Form.Control name="address" type="text" placeholder="suburb/city" required />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid city.
                            </Form.Control.Feedback>
                            <Form.Control name="address" type="text" placeholder="postcode" required />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid zip.
                            </Form.Control.Feedback>
                            <Form.Control name="address" type="text" placeholder="state" required />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid state.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Check
                            required
                            label="Agree to terms and conditions"
                            feedback="You must agree before submitting."
                            feedbackType="invalid"
                        />
                        <Button className="mt-4" variant="primary" type="submit">
                            Sign up
                        </Button> {''}
                        <Button className="mt-4" as="input" type="reset" value="Reset" />
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}