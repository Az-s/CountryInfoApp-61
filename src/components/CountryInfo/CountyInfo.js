import React from 'react';
import { Card } from 'react-bootstrap';

const CountyInfo = () => {
    return (
        <>
            <Card border="secondary" style={{ width: '100%', marginTop: '1rem', }}>
                <Card.Header>Country Info</Card.Header>
                <Card.Title style={{ marginTop: '1rem', }}>Country Title</Card.Title>
                <Card.Body>
                <Card.Img variant="top" src="holder.js/100px180?text=Image cap" fluid style={{ width: '100%', height: '200px'}}/>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default CountyInfo;
