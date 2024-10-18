import { Formik, Form, FormikHelpers } from 'formik';
import { GenderSelection } from '../genderSelection';
import { Text, Title, TitleWrapper, Wrapper } from './addPetForm.styled';

interface AddPetFormValues {
  sex: string;
}

const initialValues: AddPetFormValues = {
  sex: '',
};

export const AddPetForm = () => {
  const handleSubmit = (
    values: AddPetFormValues,
    { setSubmitting }: FormikHelpers<AddPetFormValues>
  ) => {
    setSubmitting(false);
  };

  return (
    <Wrapper>
      <TitleWrapper>
        <Title>Add my pet /</Title>
        <Text>Personal details</Text>
      </TitleWrapper>

      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
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
          {/* <button type="submit">Submit</button> */}
        </Form>
      </Formik>
    </Wrapper>
  );
};
