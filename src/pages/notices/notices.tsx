import { Section, TitleWrapper } from './notices.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { topScroll } from 'utils/topScroll';
import { NoticesFilters, NoticesList } from './components';
import { Container, Pagination, Title } from 'ui';
import { fetchNotices } from '../../redux/notices/noticesOperations';
import {
  selectNotices,
  selectTotalPagesNotices,
} from '../../redux/notices/noticesSelectors';
import { AppDispatch } from 'redux/store';
import { Notice } from 'types';

const Notices = () => {
  const [selectedPage, setSelectedPage] = useState<number>(1);
  const dispatch = useDispatch<AppDispatch>();
  const notices = useSelector(selectNotices) as Notice[];
  const totalPages = useSelector(selectTotalPagesNotices) ?? 1;

  const handlePageChange = (e: { selected: number }) => {
    setSelectedPage(e.selected + 1);
    topScroll();
  };

  useEffect(() => {
    dispatch(fetchNotices(selectedPage));
  }, [dispatch, selectedPage]);

  return (
    <Section>
      <Container>
        <TitleWrapper>
          <Title name={'Find your favorite pet'} />
        </TitleWrapper>
        <NoticesFilters />
        <NoticesList notices={notices} />
        <Pagination totalPages={totalPages} onPageChange={handlePageChange} />
      </Container>
    </Section>
  );
};

export default Notices;
