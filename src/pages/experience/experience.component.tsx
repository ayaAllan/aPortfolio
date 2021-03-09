import React from 'react';
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import "./experience.style.css";

const Experience = () => {
    return (
        <div className="pt-3 pb-3" id='experience'>
            <h1 className="text-center font-details-b pb-4">EXPERIENCE</h1>
            <Card border="primary" style={{ width: 'inherit' }}>
                <Card.Header>Header</Card.Header>
                <Card.Body>
                <Card.Title>Primary Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                </Card.Text>
                </Card.Body>
            </Card>
            <br />

            <Card border="secondary" style={{ width: 'inherit' }}>
                <Card.Header>Header</Card.Header>
                <Card.Body>
                <Card.Title>Secondary Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                </Card.Text>
                </Card.Body>
            </Card>
            <br />

            <Card border="success" style={{ width: 'inherit' }}>
                <Card.Header>Header</Card.Header>
                <Card.Body>
                <Card.Title>Success Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                </Card.Text>
                </Card.Body>
            </Card>
            <br />
        </div>
    )
}

export default Experience
