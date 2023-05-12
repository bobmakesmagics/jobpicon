import React from 'react';
import AsyncSelect from 'react-select/async';

const cities = [
  { label: 'New York', value: 'New York' },
  { label: 'Los Angeles', value: 'Los Angeles' },
  { label: 'Chicago', value: 'Chicago' },
  // Add more cities here
];

const filterCities = (inputValue) => {
  return cities.filter((city) =>
    city.label.toLowerCase().includes(inputValue.toLowerCase())
  );
};

const loadOptions = (inputValue, callback) => {
  setTimeout(() => {
    callback(filterCities(inputValue));
  }, 1000);
};

function CitySelect() {
  return (
    <AsyncSelect
      cacheOptions
      loadOptions={loadOptions}
      defaultOptions
      placeholder="Select a City"
      className="w-full text-sm"
    />
  );
}

export default CitySelect;
