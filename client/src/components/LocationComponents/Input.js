import React, { Component } from 'react';
import Select from 'react-select';
// import makeAnimated from 'react-select/animated';
// import Geosuggest from 'react-geosuggest';

// const onSuggestSelect = (suggest) => console.log(suggest);

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

export class Input extends Component {
  render() {
    return (
      <div>
        {/* <Geosuggest
          placeholder={'Enter location'}
          // onFocus={this.onFocus}
          //   onBlur={this.onBlur}
          //   onChange={this.onChange}
          onSuggestSelect={onSuggestSelect}
          //   onSuggestNoResults={this.onSuggestNoResults}
          location={new window.google.maps.LatLng(53.558572, 9.9278215)}
          //   country="us"
          radius="20"
          //   initialValue={this.state.default}
        /> */}
        <Select options={options} />
      </div>
    );
  }
}

export default Input;
