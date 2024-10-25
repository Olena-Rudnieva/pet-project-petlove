import { Formik, FormikHelpers, Field, ErrorMessage } from 'formik';
import { GenderSelection } from '../genderSelection';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import sprite from 'assets/sprite.svg';
import Select from 'react-select';
import {
  ButtonWrapper,
  CalendarIcon,
  ErrorText,
  FormWrapper,
  InputWrapper,
  Label,
  OptionsWrapper,
  Text,
  Title,
  TitleWrapper,
  Wrapper,
} from './addPetForm.styled';
import { AddPetFormSchema } from './addPetFormShema';
import { Button } from 'ui';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'redux/store';
import { addPet } from '../../../../redux/pets';

const speciesOptions = [
  { value: 'dog', label: 'Dog' },
  { value: 'cat', label: 'Cat' },
  { value: 'monkey', label: 'Monkey' },
  { value: 'bird', label: 'Bird' },
  { value: 'fish', label: 'Fish' },
  { value: 'reptile', label: 'Reptile' },
  { value: 'other', label: 'Other' },
];

interface AddPetFormData {
  name: string;
  imgURL?: string;
  species: string;
  birthday: string;
  title?: string;
  sex: string;
}

const initialValues: AddPetFormData = {
  name: '',
  imgURL: 'https://test.webp',
  species: '',
  birthday: '',
  title: '',
  sex: 'female',
};

export const AddPetForm = () => {
  const [birthday, setBirthday] = useState<Date | null>(null);
  const [selectedSpecies, setSelectedSpecies] = useState({
    value: '',
    label: '',
  });

  const dispatch = useDispatch<AppDispatch>();

  const handleSpeciesChange = (selectedOption: any) => {
    setSelectedSpecies(selectedOption);
  };

  const customStyles = {
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
      fontWeight: '500',
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

  const handleSubmit = (
    { name, imgURL, species, title, sex }: AddPetFormData,
    { resetForm }: FormikHelpers<AddPetFormData>
  ) => {
    const formattedBirthday = birthday
      ? birthday.toISOString().split('T')[0]
      : '';

    const petData = {
      name,
      imgURL,
      species,
      birthday: formattedBirthday,
      title,
      sex,
    };

    dispatch(addPet(petData));
    resetForm();
  };

  return (
    <Wrapper>
      <TitleWrapper>
        <Title>Add my pet /</Title>
        <Text>Personal details</Text>
      </TitleWrapper>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={AddPetFormSchema}
      >
        {({ handleSubmit, errors, touched, setFieldValue }) => (
          <form onSubmit={handleSubmit}>
            <FormWrapper>
              <GenderSelection />
              {/* <ImageWrapper>
                {pet.imgURL ? (
                  <Image src={pet.imgURL} alt="Pet" />
                ) : (
                  <PetIcon>
                    <use href={sprite + '#icon-pet'}></use>
                  </PetIcon>
                )}
              </ImageWrapper> */}
              <InputWrapper>
                <label>
                  <Field type="title" name="title" placeholder="Title" />
                  <ErrorMessage name="title" component={ErrorText} />
                </label>
              </InputWrapper>
              <InputWrapper>
                <label>
                  <Field type="name" name="name" placeholder="Pet's Name" />
                  <ErrorMessage name="name" component={ErrorText} />
                </label>
              </InputWrapper>
              <OptionsWrapper>
                <InputWrapper>
                  <Label>
                    <DatePicker
                      selected={birthday}
                      onChange={(date: Date | null) => {
                        setBirthday(date);
                        setFieldValue(
                          'birthday',
                          date
                            ? date.toLocaleDateString('uk-UA', {
                                day: '2-digit',
                                month: '2-digit',
                                year: 'numeric',
                              })
                            : ''
                        );
                      }}
                      dateFormat="dd.MM.yyyy"
                      placeholderText="00.00.0000"
                    />
                    <ErrorMessage name="birthday" component={ErrorText} />
                  </Label>
                  <CalendarIcon>
                    <use href={sprite + '#icon-calendar'}></use>
                  </CalendarIcon>
                </InputWrapper>
                <InputWrapper>
                  <Label>
                    <Select
                      value={selectedSpecies}
                      onChange={option => {
                        if (option) {
                          handleSpeciesChange(option);
                          setFieldValue('species', option.value);
                        } else {
                          setFieldValue('species', '');
                        }
                      }}
                      options={speciesOptions}
                      placeholder="Select Species"
                      styles={customStyles}
                      // defaultValue={speciesOptions[0]}
                    />
                    <ErrorMessage name="species" component={ErrorText} />
                  </Label>
                </InputWrapper>
              </OptionsWrapper>
            </FormWrapper>
            <ButtonWrapper>
              <Button
                // padding={'16px 186px'}
                // width={'424px'}
                // height={'52px'}
                type={'submit'}
                // handleClick={handleSubmit}
              >
                Submit
              </Button>
            </ButtonWrapper>
          </form>
        )}
      </Formik>
    </Wrapper>
  );
};
