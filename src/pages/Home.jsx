import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'

import {Query} from 'appwrite'
import { useState, useEffect } from 'react'

export function Home(props) {
    const [ data, setData ] = useState([])
    const [ loaded, setloaded ] = useState(  false )

    document.title = "The best drinks in town"

    const database = props.db 
    const storage = props.str 
    // function to get data
    const getData = async () => {
        const result = await database.listDocuments(
            '6746c68d003d60be8be0', // database id
            '6746c8d80000ffe7b86b', // collection id
            []
        )
        setData( result.documents )
        setloaded( true )
    }

    useEffect( () => {getData ()}, [data] )

    const ProductCollection = data.map( (p) => {
        // return each product as a Col
        // get preview of image
        const imgURL = storage.getFileView(
            '6746d6320026df87746c', // bucket ID
            p.image // file ID
        )
        return (
        <Col className='mt-3 mb-3' md={4}>
            <img className="img-fluid" src={imgURL}/>
            <h3>{ p.Name }</h3>
            <h5>{ p.Price}</h5>
            <p>{ p.Description }</p>
        </Col>
        )
    } )

    return (
        <Container>
            <Row>
                <Col>
                    <h2>The best drinks in town!</h2>
                </Col>
            </Row>
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" src="./src/assets/douglas-lopez-Lf5Xzq6NvWw-unsplash.jpg" />
                    <Carousel.Caption>
                        <h3>The experience and flavor that delight the senses!</h3>
                        <p>A symphony of flavors that indulge and awaken your senses.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="./src/assets/david-kohler-gBdG886bLDY-unsplash.jpg" />
                    <Carousel.Caption>
                        <h3>A unique experience that turns every sip into a desire!</h3>
                        <p>Indulge in the richness of flavor that lingers long after the last drop.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="./src/assets/pexels-cottonbro-5791668.jpg" />
                    <Carousel.Caption>
                        <h3>The refined flavor and unique experience you deserve!</h3>
                        <p>
                        Every moment is a celebration of craftsmanship and tradition in every bottle.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Row>{ ProductCollection }</Row>
        </Container>
    )
}