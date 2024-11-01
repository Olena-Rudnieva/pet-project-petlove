import { Formik, FormikHelpers, Field, ErrorMessage } from 'formik';
import { GenderSelection } from '../genderSelection';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import sprite from 'assets/sprite.svg';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';
import {
  BlockWrapper,
  ButtonWrapper,
  CalendarIcon,
  customStyles,
  ErrorText,
  FormWrapper,
  Image,
  ImageWrapper,
  InputWrapper,
  Label,
  OptionsWrapper,
  PetIcon,
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
import { speciesOptions } from 'constants/addPetOptions';
import { ButtonSize, ButtonVariant } from 'types';

interface AddPetFormData {
  name: string;
  imgURL: string;
  species: string;
  birthday: string;
  title?: string;
  sex: string;
}

const initialValues: AddPetFormData = {
  name: '',
  imgURL: '',
  species: '',
  birthday: '',
  title: '',
  sex: '',
};

export const AddPetForm = () => {
  const [birthday, setBirthday] = useState<Date | null>(null);
  const [selectedSpecies, setSelectedSpecies] = useState(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleSpeciesChange = (selectedOption: any) => {
    setSelectedSpecies(selectedOption);
  };

  const handleSubmit = (
    { name, imgURL, species, title, sex }: AddPetFormData,
    { resetForm }: FormikHelpers<AddPetFormData>
  ) => {
    const formattedBirthday = birthday
      ? `${birthday.getFullYear()}-${(birthday.getMonth() + 1)
          .toString()
          .padStart(2, '0')}-${birthday.getDate().toString().padStart(2, '0')}`
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
    navigate('/profile');
  };

  const handleCancel = () => {
    navigate('/profile');
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
        {({ handleSubmit, setFieldValue, values }) => (
          <form onSubmit={handleSubmit}>
            <FormWrapper>
              <GenderSelection setFieldValue={setFieldValue} />
              <ErrorMessage name="sex" component={ErrorText} />
              <ImageWrapper>
                {selectedImage ? (
                  <Image src={selectedImage} alt="Pet" />
                ) : (
                  <PetIcon>
                    <use href={sprite + '#icon-pet'}></use>
                  </PetIcon>
                )}
              </ImageWrapper>
              <BlockWrapper>
                <InputWrapper>
                  <label>
                    <Field
                      type="imgURL"
                      name="imgURL"
                      placeholder="Enter URL"
                      value={values.imgURL}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setFieldValue('imgURL', e.target.value);
                      }}
                    />
                    <ErrorMessage name="imgURL" component={ErrorText} />
                  </label>
                </InputWrapper>
                <Button
                  onClick={e => {
                    e.preventDefault();
                    setSelectedImage(values.imgURL);
                  }}
                >
                  Add
                </Button>
              </BlockWrapper>
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
                    />
                    <ErrorMessage name="species" component={ErrorText} />
                  </Label>
                </InputWrapper>
              </OptionsWrapper>
            </FormWrapper>
            <ButtonWrapper>
              <Button
                size={ButtonSize.small}
                variant={ButtonVariant.grey}
                type={'submit'}
                onClick={handleCancel}
              >
                Back
              </Button>
              <Button
                size={ButtonSize.small}
                variant={ButtonVariant.orange}
                type={'submit'}
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
