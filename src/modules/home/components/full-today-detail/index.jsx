import React from 'react';
import { connect } from 'react-redux';
import { Col, Row, Typography } from 'antd';
import moment from 'moment';

import { WeatherCard } from '../../../../components';
import { getWeatherIcon } from '../../../../helper';

import './style.less';

/*const demo = {
	air_pressure: 1010.5
	applicable_date: "2020-06-04"
	created: "2020-06-04T04:25:35.347599Z"
	humidity: 65
	id: 5407746176319488
	max_temp: 34.83
	min_temp: 28.205
	predictability: 71
	the_temp: 34.545
	visibility: 13.435598604151753
	weather_state_abbr: "hc"
	weather_state_name: "Heavy Cloud"
	wind_direction: 177.30606651292513
	wind_direction_compass: "S"
	wind_speed: 3.6975270691932445
}*/

const FullTodayDetail = React.memo(({isLoading, weatherData}) => {
	if (!weatherData) {
		return null;
	}
	const todayDetail = weatherData.consolidated_weather[0];

	const imgUrl = getWeatherIcon(todayDetail.weather_state_abbr);
	const getDateFormat = (format) => moment(todayDetail.applicable_date, 'YYYY-MM-DD').format(format);
	const roundNumber = (number) => Math.round(number);

	return (
			<Col span={24}>
				<WeatherCard loading={isLoading} className="full-day-detail">
					<Row justify="space-between" gutter={16}>
						<Col span={24} sm={18} className="full-day-detail__city">
							<Typography.Title level={1}>{weatherData.title} - {weatherData.parent.title}</Typography.Title>
						</Col>
						<Col span={24} sm={6} className="full-day-detail__temp">
							<p>High <b>{roundNumber(todayDetail.max_temp)}&deg;</b> - Low <b>{roundNumber(todayDetail.min_temp)}&deg;</b></p>
						</Col>

						<Col span={24} md={8} className="full-day-detail__more-info">
							<p className="weekday">{getDateFormat('dddd')}</p>
							<p>{getDateFormat('DD/MM/YYYY')}</p>
							<p>Wind: {roundNumber(todayDetail.wind_speed)}km/h</p>
							<p>Humidity: {todayDetail.humidity}%</p>
						</Col>
						<Col span={24} md={8} className="full-day-detail__weather-type">
							<img src={imgUrl} alt={todayDetail.weather_state_name}/>
							<p>{todayDetail.weather_state_name}</p>
						</Col>
						<Col span={24} md={8} className="full-day-detail__celsius">
							<Typography.Title level={1}>{roundNumber(todayDetail.the_temp)}&deg;</Typography.Title>
						</Col>
					</Row>
				</WeatherCard>
			</Col>
	);
});

const mapState = (state) => ({
	isLoading: state.weather.fetching,
	weatherData: state.weather.weatherData,
});

export default connect(mapState)(FullTodayDetail)
