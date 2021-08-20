import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import axios from 'axios';
import Navbars from './components/Navbar/Navbar';
import CountrySide from './components/CountrySide/CountrySide';
import CountyInfo from './components/CountryInfo/CountyInfo';
import { Country_URL, CoutryInfo_URL, CoutryInfo_URL2 } from './config';
import './App.css';

const App = () => {

  const [countries, setCountries] = useState([]);
  const [countryInfo, setCountryInfo] = useState([]);
  const [countryBorders, setCountryBorders] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(Country_URL);
        const countries = response.data;

        setCountries(countries);
        setError(null);
      } catch (e) {
        console.log(e.response);
        setError('Something went wrong ' + e.response.status);
      }
    }

    fetchData().catch(e => console.error(e));

  }, []);


  const fetchDatas = async (event) => {
    const country = event.currentTarget.textContent;

    try {
      const response = await axios.get(CoutryInfo_URL + country);
      let countryInfo = response.data[0];

      let border = response[0];
      let allCountryBorder = border.borders;
      const countryBorders = await Promise.all(allCountryBorder);
      setCountryBorders(countryBorders);

      setCountryInfo(countryInfo);
      console.log(border  )
      
      setError(null);
    } catch (e) {
      setError('Something went wrong ' + e.response.status);
    }
  }
  
  useEffect(() => {
    fetchDatas().catch(e => console.error(e));
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
            <CountrySide countries={countries} onClick={fetchDatas.bind(this)} />
          </Col>
          <Col sm={8}>
            <CountyInfo countryInfo={countryInfo} countryBorders={countryBorders} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
