import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

export function About( props ) {
    document.title = "Who we are?"
    return(
        <Container>
            <Row>
                <Col>
                    <h2>Our History</h2>
                    <img className="d-block w-100" src="./src/assets/karsten-wurth-49aQgxkOrO4-unsplash.jpg"/>
                </Col>
            </Row>
            <Row className="mt-4 mb-3">
            <p>At Win&Valley(WinEValley), every bottle of wine tells a story — a story of passion, tradition, and a dedication to crafting exceptional wines. <br/>

            <br/>It all began in a small valley, where lush hills and the perfect climate came together to create the ideal environment for viticulture. It was in this idyllic setting that our founder, a true wine lover, decided to follow his passion and transform his love for the land and the vines into something even more special. With the desire to share the beauty and flavor of his homeland with the world, Win&Valley was born. <br/>

<br/>From the first carefully tended vineyard to the latest harvest, our mission has remained simple: to create wines that offer not only flavor, but a true sensory experience. We believe that wine is not just a drink, but a journey. Every sip should tell the story of the soil where the grapes were grown, the passion that goes into every step of the winemaking process, and the experience of sharing these special moments with those we cherish most. <br/>

<br/>Over the years, our commitment to quality and innovation has allowed us to not only preserve winemaking traditions but also embrace new techniques that help us refine the flavor and experience we offer. In every bottle of Win&Valley, you'll find the union of two worlds: the classic and the contemporary, the handcrafted and the modern. Each wine we produce is a reflection of our meticulous work and our relentless dedication to perfection. <br/>

<br/>Win&Valley is more than just a winery. We are a family with a passion for creating wines that delight the senses and create unforgettable moments. We invite you to discover our story, explore our wines, and be part of our journey — where every sip is an invitation to experience the excellence and pleasure that only wine can offer.</p>
</Row>
            
        </Container>
    )
}