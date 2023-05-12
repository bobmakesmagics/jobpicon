import React from 'react';
import AsyncSelect from 'react-select/async';

const countries = [
  { label: 'United States', value: 'United States' },
  { label: 'Canada', value: 'Canada' },
  { label: 'Mexico', value: 'Mexico' },
  // Add more countries here
];

const filterCountries = (inputValue) => {
  return countries.filter((country) =>
    country.label.toLowerCase().includes(inputValue.toLowerCase())
  );
};

const loadOptions = (inputValue, callback) => {
  setTimeout(() => {
    callback(filterCountries(inputValue));
  }, 1000);
};

function CountrySelect() {
  return (
    <AsyncSelect
      cacheOptions
      loadOptions={loadOptions}
      defaultOptions
      placeholder="Select a Country"
      className="w-full text-sm"
    />
  );
}

export default CountrySelect;
