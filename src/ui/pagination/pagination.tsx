import { StyledReactPaginate } from './pagination.styled';
import sprite from 'assets/sprite.svg';

interface PaginationProps {
  totalPages: number;
  onPageChange: (selectedItem: { selected: number }) => void;
}

export const Pagination = ({ totalPages, onPageChange }: PaginationProps) => {
  return (
    <>
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
        previousClassName={'pagination-previous'}
        nextClassName={'pagination-next'}
        previousLinkClassName={'pagination-previous-link'}
        nextLinkClassName={'pagination-next-link'}
        disabledClassName={'pagination-disabled'}
      />
    </>
  );
};
