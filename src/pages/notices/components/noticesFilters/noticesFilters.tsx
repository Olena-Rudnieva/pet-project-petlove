import { useState } from 'react';
import { FilterWrapper, Form, Wrapper } from './noticesFilters.styled';
import Select from 'react-select';

type SelectOption = {
  value: string;
  label: string;
};

export const NoticesFilters = () => {
  const [category, setCategory] = useState<SelectOption>({
    value: 'all',
    label: 'Category',
  });
  const [gender, setGender] = useState<SelectOption>({
    value: 'all',
    label: 'By gender',
  });
  const [type, setType] = useState<SelectOption>({
    value: 'all',
    label: 'By type',
  });

  const reset = () => {
    setCategory({ value: 'all', label: 'Category' });
    setGender({ value: 'all', label: 'By gender' });
    setType({ value: 'all', label: 'By type' });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    reset();
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <FilterWrapper>
          <label>
            <Select
              id="category"
              value={category}
              // options={brands}
              // onChange={setBrand}
              isSearchable
              // styles={stylesBrand}
            />
          </label>
          <label>
            <Select
              id="gender"
              value={gender}
              // options={brands}
              // onChange={setBrand}
              isSearchable
              // styles={stylesBrand}
            />
          </label>
          <label>
            <Select
              id="type"
              value={type}
              // options={brands}
              // onChange={setBrand}
              isSearchable
              // styles={stylesBrand}
            />
          </label>
        </FilterWrapper>
      </Form>
    </Wrapper>
  );
};
// import { useState } from 'react';
// // import { useDispatch } from 'react-redux';
// import { FilterWrapper, Form, Wrapper } from './noticesFilters.styled';
// import Select from 'react-select';

// export const NoticesFilters = () => {
//   const [category, setCategory] = useState({
//     value: 'all',
//     label: 'Category',
//   });
//   const [gender, setGender] = useState({ value: 'all', label: 'By gender' });
//   const [type, setType] = useState({ value: 'all', label: 'By type' });

//   const reset = () => {
//     setCategory({ value: 'all', label: 'Category' });
//     setGender({ value: 'all', label: 'By gender' });
//     setType({ value: 'all', label: 'By type' });
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     reset();
//   };

//   return (
//     <>
//       <Wrapper>
//         <Form onSubmit={handleSubmit}>
//           <FilterWrapper>
//             <label>
//               <Select
//                 id="category"
//                 value={category}
//                 // options={brands}
//                 // onChange={setBrand}
//                 isSearchable
//                 // styles={stylesBrand}
//               />
//             </label>
//             <label>
//               <Select
//                 id="gender"
//                 value={gender}
//                 // options={brands}
//                 // onChange={setBrand}
//                 isSearchable
//                 // styles={stylesBrand}
//               />
//             </label>
//             <label>
//               <Select
//                 id="type"
//                 value={type}
//                 // options={brands}
//                 // onChange={setBrand}
//                 isSearchable
//                 // styles={stylesBrand}
//               />
//             </label>
//           </FilterWrapper>
//         </Form>
//       </Wrapper>
//     </>
//   );
// };
