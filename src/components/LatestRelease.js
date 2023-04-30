import React from 'react'
import { Container, Col, Row, Card } from 'react-bootstrap'
import Books from '../data/fantasy.json'

const LatestRelease = () => {

    return (
        <Container fluid>
            <Row className='d-flex' sm={2} md={3} lg={4}>
                {Books.map((book) => (
                    <Col key={book.asin}>
                        <Card style={{ width: '14rem' }}>
                            <Card.Img style={{ height: "20rem" }} src={book.img} />
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default LatestRelease