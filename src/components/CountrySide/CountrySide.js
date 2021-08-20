import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const CountrySide = ({ countries , onClick}) => {
    return (
        <>
            <Card border="secondary" style={{ width: '100%', marginTop: '1rem', }}>
                <Card.Header>Select Country</Card.Header>
                <Card.Body>
                    <Card.Text style={{
                        maxHeight: 'calc(100vh - 210px)',
                        overflowY: 'auto'
                    }}>
                        {countries.map((contry, key) => (
                            <ListGroup.Item action variant="light" key={key} onClick={event => onClick.onClick(event)}>
                                {contry.name}
                            </ListGroup.Item>
                        ))}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default CountrySide;
