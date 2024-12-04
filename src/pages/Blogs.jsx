import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

export function Blogs(props) {
    document.title = "Did you know?"
    return (
        <Container>
            <Row>
                <Col>
                    <h2>Did you know?</h2>
                    <img className="d-block w-100" src="./src/assets/d-a-v-i-d-s-o-n-l-u-n-a-hupBI0Doj9o-unsplash.jpg" />
                </Col>
            </Row>
            <Card>
                <Card.Body>
                    <Card.Title>How to Identify a Quality Wine: Expert Tips</Card.Title>
                    <Card.Text>
                    When you buy a bottle of wine, what tells you that you're purchasing a quality product? The color, the aroma, the taste — each of these elements plays a significant role in evaluating the wine. In this post, we’ll share expert tips on how to identify a high-quality wine. From analyzing the color and aroma to evaluating the balance of flavors and the finish, you'll learn to appreciate every aspect of the wine, enabling you to always choose the best.
                    </Card.Text>
                    <Button variant="primary">Learn more about</Button>
                </Card.Body>
            </Card>
        </Container>
    )
}