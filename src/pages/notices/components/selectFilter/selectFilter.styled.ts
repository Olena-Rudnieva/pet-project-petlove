export const customStyles = {
  container: (provided: any) => ({
    ...provided,
    width: '100%',
  }),
  control: (provided: any, state: any) => {
    const istablet = window.innerWidth >= 768;

    return {
      ...provided,
      width: '100%',
      paddingTop: istablet ? '8px' : '4px',
      paddingBottom: istablet ? '8px' : '4px',
      fontSize: istablet ? '16px' : '14px',
      color: '#000',
      fontWeight: '500',
      lineHeight: istablet ? '20px' : '18px',
      letterSpacing: '3%',
      border: state.isFocused ? '1px solid #F6B83D' : '1px solid #e0e0e0',
      borderRadius: '30px',
      boxShadow: 'none',
      '&:hover': {
        borderColor: '#F6B83D',
      },
    };
  },
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
