import React from 'react';
import { AutoComplete } from 'antd';
import { connect } from 'react-redux';

import { Loading, WeatherCard } from '../../../../components';
import { debounce } from '../../../../helper';

const SearchAutocomplete = React.memo(({ searchCity, cities, onSelectCity, isSearching }) => {
  const handleSearchChange = debounce((value) => {
    searchCity(value);
  }, 500);

  const getWoeid = (fullText) => fullText.split('-')[1].trim();

  const handleSelectCity = (value) => {
    const woeid = getWoeid(value);
    onSelectCity(woeid);
  }

  return (
      <WeatherCard>
        <AutoComplete
            placeholder="Input text to search city"
            notFoundContent={isSearching ? <Loading size="small"/> : 'Not found'}
            onSearch={handleSearchChange}
            onSelect={handleSelectCity}
        >
          {cities.map(city => <AutoComplete.Option key={`${city.title} - ${city.woeid}`}>{city.title} - {city.woeid}</AutoComplete.Option>)}
        </AutoComplete>
      </WeatherCard>
  );
});

const mapState = state => ({
  isSearching: state.weather.searching,
  cities: state.weather.cities,
});

export default connect(mapState)(SearchAutocomplete);
