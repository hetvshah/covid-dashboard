import React from 'react';
import Select from 'react-select';
import StatCard from '../StatCard';
import { useState, useMemo } from 'react';
import escapeRegExp from 'lodash/escapeRegExp';

// function GetSlice({ countiesArr }) {
//   const slicedOptions = useMemo(() => countiesArr.slice(0, 500), [countiesArr]);

//   return slicedOptions;
// }

const MAX_DISPLAYED_OPTIONS = 450;

const Input = ({ states, counties, options, statesArr, countiesArr }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const filteredOptions = useMemo(() => {
    if (!inputValue) {
      return countiesArr;
    }

    const matchByStart = [];
    const matchByInclusion = [];

    const regByInclusion = new RegExp(escapeRegExp(inputValue), 'i');
    const regByStart = new RegExp(`^${escapeRegExp(inputValue)}`, 'i');

    for (const option of countiesArr) {
      if (regByInclusion.test(option.label)) {
        if (regByStart.test(option.label)) {
          matchByStart.push(option);
        } else {
          matchByInclusion.push(option);
        }
      }
    }

    return [...matchByStart, ...matchByInclusion];
  }, [inputValue, countiesArr]);

  const slicedOptions = useMemo(
    () => filteredOptions.slice(0, MAX_DISPLAYED_OPTIONS),
    [filteredOptions]
  );

  if (selectedOption !== null && selectedOption !== undefined) {
    console.log('HELLO');
    console.log(selectedOption);
    const stats = selectedOption.map((option) => {
      return (
        <StatCard label={option.label} states={states} counties={counties} />
      );
    });
    return (
      <div>
        <Select
          options={[
            { label: 'states', options: statesArr },
            { label: 'counties', options: slicedOptions },
          ]}
          onInputChange={(value) => setInputValue(value)}
          onChange={setSelectedOption}
          // filterOption={createFilter({ ignoreAccents: false })}
          isMulti
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto' }}>
          {stats}
        </div>
      </div>
    );
  }

  console.log(inputValue);

  return (
    <div>
      <Select
        options={[
          { label: 'states', options: statesArr },
          { label: 'counties', options: slicedOptions },
        ]}
        onInputChange={(value) => setInputValue(value)}
        onChange={setSelectedOption}
        // filterOption={createFilter({ ignoreAccents: false })}
        isMulti
      />
    </div>
  );
};

export default Input;

// export class Input extends Component {
//   constructor() {
//     super();
//     this.state = {
//       selectedOption: null,
//       slicedOptions: [],
//     };
//   }

//   handleChange = (selectedOption) => {
//     this.setState({ selectedOption }, () =>
//       console.log(`Option selected:`, this.state.selectedOption)
//     );
//   };

//   render() {
//     if (this.state.selectedOption !== null) {
//       const stats = this.state.selectedOption.map((option) => {
//         return (
//           <StatCard
//             label={option.label}
//             states={this.props.states}
//             counties={this.props.counties}
//           />
//         );
//       });
//       return (
//         <div>
//           <Select
//             options={this.props.options}
//             onChange={this.handleChange}
//             filterOption={createFilter({ ignoreAccents: false })}
//             isMulti
//           />
//           <div
//             style={{ display: 'grid', gridTemplateColumns: 'auto auto auto' }}
//           >
//             {stats}
//           </div>
//         </div>
//       );
//     }

//     return (
//       <div>
//         {console.log(this.props.options)}
//         <Select
//           options={this.props.options}
//           onChange={this.handleChange}
//           filterOption={createFilter({ ignoreAccents: false })}
//           isMulti
//         />
//       </div>
//     );
//   }
// }

// export default Input;
