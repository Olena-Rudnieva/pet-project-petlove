// import { useState } from 'react';
import sprite from 'assets/sprite.svg';

import { StyledReactPaginate } from './pagination.styled';

interface PaginationProps {
  totalPages: number;
  onPageChange: (selectedItem: { selected: number }) => void;
}

export const Pagination = ({ totalPages, onPageChange }: PaginationProps) => {
  // const [currentPage, setCurrentPage] = useState(0);

  // console.log(currentPage);

  // const handlePageClick = data => {
  //   const selectedPage = data.selected + 1;
  //   setCurrentPage(selectedPage);
  //   onPageChange(selectedPage);
  // };

  // const handleFirstPageClick = () => {
  //   onPageChange(0);
  // };

  // const handleLastPageClick = () => {
  //   onPageChange(totalPages - 1);
  // };

  return (
    <>
      {/* <button onClick={handleFirstPageClick}>{'<<'}</button> */}
      <StyledReactPaginate
        previousLabel={
          <svg>
            <use href={sprite + '#icon-angle-left'}></use>
          </svg>
        }
        nextLabel={
          <svg>
            <use href={sprite + '#icon-angle-right'}></use>
          </svg>
        }
        breakLabel={'...'}
        pageCount={Math.ceil(totalPages)}
        marginPagesDisplayed={0}
        pageRangeDisplayed={3}
        onPageChange={onPageChange}
        containerClassName={'pagination'}
        activeClassName={'active'}
        pageClassName={'page'}
        breakClassName={'pagination-break'}
        // onPageActive={({ selected }) => setCurrentPage(selected)}
        previousClassName={'pagination-previous'}
        nextClassName={'pagination-next'}
        previousLinkClassName={'pagination-previous-link'}
        nextLinkClassName={'pagination-next-link'}
        disabledClassName={'pagination-disabled'}
      />
      {/* <button onClick={handleLastPageClick}>{'>>'}</button> */}
    </>
  );
};
