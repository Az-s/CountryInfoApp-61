import React from 'react';
import { Card, ListGroup, Row } from 'react-bootstrap';

const CountyInfo = ({ countryInfo , countryBorders }) => {
    return (
        <>
            <Card border="secondary" style={{ width: '100%', marginTop: '1rem', }}>
                <Card.Header>Country Info</Card.Header>
                <Row>
                    <Card.Title style={{ marginTop: '1rem', }}>Country name: {countryInfo.name}</Card.Title>
                    <Card.Body>
                        <Card.Img variant="top" src={countryInfo.flag} fluid style={{ width: '400px', height: '200px' , marginBottom: '2rem'}} />
                        <ListGroup.Item>Capital: {countryInfo.capital}</ListGroup.Item>
                        <ListGroup.Item>Subregion: {countryInfo.subregion}</ListGroup.Item>
                        <ListGroup.Item>Population: {countryInfo.population}</ListGroup.Item>
                    </Card.Body>
                </Row>
                {countryBorders.map((item, index) => (
                    <Row>
                        <ListGroup.Item key={index}>Capital: {item}</ListGroup.Item>
                    </Row>
                ))}
            </Card>
        </>
    )
}

export default CountyInfo;

// {name} {capital} {subregion} {flag} {borders}
