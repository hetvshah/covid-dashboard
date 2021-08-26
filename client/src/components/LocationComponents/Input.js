import React from 'react';
import Select, { createFilter } from 'react-select';
import StatCard from '../StatCard';
import { useState, useMemo } from 'react';
import escapeRegExp from 'lodash/escapeRegExp';

// function GetSlice({ countiesArr }) {
//   const slicedOptions = useMemo(() => countiesArr.slice(0, 500), [countiesArr]);

//   return slicedOptions;
// }

const MAX_DISPLAYED_OPTIONS = 500;

const Input = ({ states, counties, options }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const filteredOptions = useMemo(() => {
    if (!selectedOption) {
      return options;
    }

    const matchByStart = [];
    const matchByInclusion = [];

    const regByInclusion = new RegExp(escapeRegExp(selectedOption), 'i');
    const regByStart = new RegExp(`^${escapeRegExp(selectedOption)}`, 'i');

    for (const option of options) {
      if (regByInclusion.test(option.label)) {
        if (regByStart.test(option.label)) {
          matchByStart.push(option);
        } else {
          matchByInclusion.push(option);
        }
      }
    }

    return [...matchByStart, ...matchByInclusion];
  }, [selectedOption, options]);

  const slicedOptions = useMemo(
    () => filteredOptions.slice(0, MAX_DISPLAYED_OPTIONS),
    [filteredOptions]
  );

  console.log(slicedOptions);

  if (selectedOption !== null && selectedOption !== undefined) {
    const stats = selectedOption.map((option) => {
      return (
        <StatCard label={option.label} states={states} counties={counties} />
      );
    });
    return (
      <div>
        {console.log(selectedOption)}
        <Select
          options={options}
          onChange={setSelectedOption}
          filterOption={createFilter({ ignoreAccents: false })}
          isMulti
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto' }}>
          {stats}
        </div>
      </div>
    );
  }

  return (
    <div>
      <Select
        options={options}
        onChange={setSelectedOption}
        filterOption={createFilter({ ignoreAccents: false })}
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
