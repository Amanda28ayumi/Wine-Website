import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'

export function Register( props ) {
    document.title = "Sign up for an account"
    return(
        <Container>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <Form>
                        <h2>Sign up</h2>
                        <Form.Group>
                            <Form.Label>Username</Form.Label>
                            <InputGroup hasValidation> 
                            <InputGroup.Text id="inputGroupPretend">@</InputGroup.Text>
                            <Form.Control name="username" type="text" placeholder="username" required/>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Fist name</Form.Label>
                            <Form.Control name="first name" type="text" placeholder="First name" required/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Last name</Form.Label>
                            <Form.Control name="last name" type="text" placeholder="Last name" required/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Gender</Form.Label>
                            <Form.Control name="gender" type="text" placeholder="F/M/O" required/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name="email" type="email" placeholder="user@domain.com" required/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Phone number</Form.Label>
                            <Form.Control name="phone number" type="text" placeholder="0000-000-000" required/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" type="password" placeholder="minimum 8 characters" required/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control name="confirm password" type="text" placeholder="Confirm password" required/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Address</Form.Label>
                            <Form.Control name="address" type="text" placeholder="street" required/>
                            <Form.Control name="address" type="text" placeholder="suburb" required/>
                            <Form.Control name="address" type="text" placeholder="postcode" required/>
                            <Form.Control name="address" type="text" placeholder="state" required/>
                        </Form.Group>
                        <Button className="mt-4" variant="primary" type="submit">
                            Sign up
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}