import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'

export function Login( props ) {
    document.title = "Sign into the account"
    return(
        <Container>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <Form>
                        <h2>Sign in</h2>
                        <Form.Group>
                            <Form.Label>Username</Form.Label>
                            <InputGroup hasValidation> 
                            <InputGroup.Text id="inputGroupPretend">@</InputGroup.Text>
                            <Form.Control name="username" type="text" placeholder="username" required/>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name="email" type="email" required/>
                        </Form.Group>
                        <Form.Group>
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