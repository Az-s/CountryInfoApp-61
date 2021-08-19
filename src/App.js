import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import axios from 'axios';
import Navbars from './components/Navbar/Navbar';
import CountrySide from './components/CountrySide/CountrySide';
import CountyInfo from './components/CountryInfo/CountyInfo';
import { Country_URL , CoutryInfo_URL } from './config';
import './App.css';

const App = () => {

  const [countries, setCountries] = useState([]);
  const [countryInfo , setCountryInfo] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(Country_URL);
        const countries = response.data;

        console.log(response);

        setCountries(countries);
        setError(null);
      } catch (e) {
        console.log(e.response);
        setError('Something went wrong ' + e.response.status);
      }
    }

    fetchData().catch(e => console.error(e));

  }, []);



  return (
    <div className="App">
      <Navbars />
      <Container>
        {error && (<div style={{ padding: '10px', background: 'red', color: 'white' }}>
          {error}
        </div>)
        }
        <Row>
          <Col sm={4}>
            <CountrySide countries={countries}/>
          </Col>
          <Col sm={8}>
            <CountyInfo />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
