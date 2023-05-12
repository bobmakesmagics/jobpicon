import React from 'react';
import AsyncSelect from 'react-select/async';

const states = [
  { label: 'California', value: 'California' },
  { label: 'Texas', value: 'Texas' },
  { label: 'Florida', value: 'Florida' },
  // Add more states here
];

const filterStates = (inputValue) => {
  return states.filter((state) =>
    state.label.toLowerCase().includes(inputValue.toLowerCase())
  );
};

const loadOptions = (inputValue, callback) => {
  setTimeout(() => {
    callback(filterStates(inputValue));
  }, 1000);
};

function StateSelect() {
  return (
    <AsyncSelect
      cacheOptions
      loadOptions={loadOptions}
      defaultOptions
      placeholder="Select a State"
      className="w-full text-sm"
    />
  );
}

export default StateSelect;
