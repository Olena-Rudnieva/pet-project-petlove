import styled from 'styled-components';
import ReactPaginate from 'react-paginate';
import { theme } from 'constants/theme';

export const StyledReactPaginate = styled(ReactPaginate)`
  display: flex;
  list-style: none;
  padding: 0;
  justify-content: center;
  align-items: center;

  .page {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
    font-size: ${theme.fontSizes.s};
    font-weight: ${theme.fontWeight.bold};
    line-height: 1.22222;
    width: 44px;
    height: 44px;
    border: 1px solid ${theme.colors.paleGrey};
    border-radius: 50%;
    padding: 11px 16px;
    cursor: pointer;
    &.active {
      background-color: ${theme.colors.accent};
      border-color: ${theme.colors.accent};
      color: ${theme.colors.white};
    }
  }

  .active {
    background-color: ${theme.colors.accent};
    border-color: ${theme.colors.accent};
    color: ${theme.colors.white};
  }

  .pagination-break {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
    width: 44px;
    height: 44px;
    border: 1px solid ${theme.colors.paleGrey};
    border-radius: 50%;
    padding: 11px 14px;
    cursor: pointer;
  }

  .pagination-previous-link,
  .pagination-next-link {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }

  .pagination-previous-link svg,
  .pagination-next-link svg {
    width: 24px;
    height: 24px;
    fill: currentColor;
    transition: fill ${theme.transition};

    &:hover {
      fill: ${theme.colors.accent};
    }
  }

  .pagination-previous,
  .pagination-next {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
    width: 44px;
    height: 44px;
    border: 1px solid ${theme.colors.lightGrey};
    border-radius: 50%;
    padding: 10px;
    cursor: pointer;
  }

  .pagination-previous.pagination-disabled,
  .pagination-next.pagination-disabled {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
    width: 44px;
    height: 44px;
    border: 1px solid ${theme.colors.paleGrey};
    border-radius: 50%;
    cursor: pointer;
  }
`;