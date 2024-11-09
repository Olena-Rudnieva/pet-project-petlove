export const customStyles = {
  control: (provided: any, state: any) => ({
    ...provided,
    width: '100%',
    padding: '8px 8px 8px 14px',
    fontSize: '16px',
    color: '#000',
    fontWeight: '500',
    lineHeight: '20px',
    letterSpacing: '3%',
    border: state.isFocused ? '1px solid #F6B83D' : '1px solid #e0e0e0',
    borderRadius: '30px',
    boxShadow: 'none',
    '&:hover': {
      borderColor: '#F6B83D',
    },
  }),
  placeholder: (provided: any) => ({
    ...provided,
    color: '#a0a0a0',
    fontWeight: '400',
  }),
  menu: (provided: any) => ({
    ...provided,
    borderRadius: '10px',
    marginTop: '0',
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#F6B83D' : '#fff',
    color: state.isSelected ? '#fff' : '#000',
    border: 'none',
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: '#F6B83D',
      color: '#fff',
    },
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color: '#000',
  }),
};
