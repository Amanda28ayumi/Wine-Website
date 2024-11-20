import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

export function Register( props ) {
    document.title = "Sign up for an account"
    return(
        <Container>
            <Row>
                <Col md={{ span: 4, offset: 4 }}>
                    <Form>
                        <h2>Sign up</h2>
                        <Form.Group>
                            <Form.Label>Email adress</Form.Label>
                            <Form.Control name="email" type="email" placeholder="user@domain.com" required/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" type="password" placeholder="minimum 8 characters" required/>
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