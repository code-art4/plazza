import Select, { StylesConfig } from 'react-select';

const SignupSelect = () => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  const customStyles = {
    option: (defaultStyles: any, state: any) => ({
      ...defaultStyles,
      color: state.isSelected ? '#fff' : '#000',
      width: '100%',
    }),

    control: (defaultStyles: any) => ({
      ...defaultStyles,
      paddingTop: '0.49rem',
      paddingBottom: '0.49rem',
      borderRadius: '.5rem',
      paddingLeft: '.8rem',
      border: '1px solid #A5A5A5',
      boxShadow: 'none',
      color: 'black',
    }),
    singleValue: (defaultStyles: any) => ({
      ...defaultStyles,
      color: '#A5A5A5',
    }),
    input: (defaultStyles: any) => ({
      ...defaultStyles,
      color: '#fff',
      padding: 0,
    }),
  };

  return <Select options={options} styles={customStyles} className='w-full' />;
};

export default SignupSelect;
