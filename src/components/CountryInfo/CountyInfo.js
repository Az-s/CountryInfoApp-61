import React from 'react';
import { Card , ListGroup , Row} from 'react-bootstrap';

const CountyInfo = ({ countryInfo }) => {
    return (
        <>
            <Card border="secondary" style={{ width: '100%', marginTop: '1rem', }}>
                <Card.Header>Country Info</Card.Header>
                {/* {countryInfo.map((info, key) => (
                    <Row key={key}>
                        <Card.Title style={{ marginTop: '1rem', }}>{info.name}</Card.Title>
                        <Card.Body>
                            <Card.Img variant="top" src={info.flag} fluid style={{ width: '100%', height: '200px' }} />
                            <ListGroup.Item>{info.capital}</ListGroup.Item>
                            <ListGroup.Item>{info.subregion}</ListGroup.Item>
                        </Card.Body>
                    </Row>
                ))} */}
            </Card>
        </>
    )
}

export default CountyInfo;

// {name} {capital} {subregion} {flag} {borders}
