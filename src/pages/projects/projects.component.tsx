import React from 'react';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import "./projects.style.css";

const Projects = () => {
    return (
        <div className="pt-3 pb-3" id='projects'>
            <h1 className="text-center font-details-b pb-4">PROJECTS</h1>
            <CardDeck className="deck">
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
            </CardDeck>
            <CardDeck className="deck">
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
            </CardDeck>
            <br />
        </div>
    )
}

export default Projects
