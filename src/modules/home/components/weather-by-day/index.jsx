import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { Col, Row, Typography } from 'antd';

import { WeatherCard } from '../../../../components';
import { getWeatherIcon } from '../../../../helper';

import './style.less';

const DaysWeatherTemplate = (props) => {
	const { weather_state_abbr, max_temp, min_temp, weather_state_name, applicable_date } = props.data;

	const weekday = moment(applicable_date, 'YYYY-MM-DD').format('ddd');
	const imgUrl = getWeatherIcon(weather_state_abbr);

	return (
		<Col>
			<p className="weather-by-day__weekday">{weekday}</p>
			<img className="weather-by-day__weather-img" src={imgUrl} alt={weekday + weather_state_name}/>
			<p className="weather-by-day__temp-of-day"><span>Hi</span><b>{Math.round(max_temp)} &deg;</b></p>
			<p className="weather-by-day__temp-of-day"><span>Lo</span><b>{Math.round(min_temp)} &deg;</b></p>
		</Col>
	);
};

const WeatherByDay = React.memo(({isLoading, weatherData}) => {
	return (
			<WeatherCard loading={isLoading} className="weather-by-day">
				<Row justify="space-around">
					{
						weatherData
								? weatherData.consolidated_weather
										.map((weatherByDay, idx) => idx === 0 ? null : (
												<DaysWeatherTemplate
													key={weatherByDay.id}
													data={weatherByDay}/>))
								: <Typography.Title level={3}>Please find some country to view 5 day forecast</Typography.Title>
					}
				</Row>
			</WeatherCard>
	);
});

const mapState = (state) => ({
	isLoading: state.weather.fetching,
	weatherData: state.weather.weatherData,
});

export default connect(mapState)(WeatherByDay);
