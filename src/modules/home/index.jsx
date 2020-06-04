import React, { useEffect } from 'react';
import { Col, Row } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getWeatherByWoeid, searchCity } from '../../store/weather/actions';

import SearchAutocomplete from './components/search-autocomplete';
import WeatherByDay from './components/weather-by-day';
import FullTodayDetail from './components/full-today-detail';

import './home.less';

const Home = ({ getWeatherByWoeid, searchCity }) => {
  useEffect(() => {
    getWeatherByWoeid('1252431');
  }, [getWeatherByWoeid]);

  const handleSelectCity = (woeid) => {
    getWeatherByWoeid(woeid);
  };

  return (
      <div className="home-wrapper">
        <Row>
          <Col span={24} sm={12} md={9}>
            <SearchAutocomplete onSelectCity={handleSelectCity} searchCity={searchCity}/>
          </Col>
          <FullTodayDetail/>
          <Col span={24}>
            <WeatherByDay/>
          </Col>
        </Row>
      </div>
  );
};

const mapDispatch = dispatch => bindActionCreators({
  searchCity,
  getWeatherByWoeid,
}, dispatch);

export default connect(null, mapDispatch)(Home);
