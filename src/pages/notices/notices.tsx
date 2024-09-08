import { List, Section, TitleWrapper } from './notices.styled';
// import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { topScroll } from 'utils/topScroll';
import { Container } from 'ui/container';
import { NoticesFilters, Pagination } from 'components';
import { NoticesItem } from './components';
import { Title } from 'ui/title';

const notices = [
  { _id: 1, title: 'Name', imgURL: '', comment: 'comment' },
  { _id: 2, title: 'Name', imgURL: '', comment: 'comment' },
];

const Notices = () => {
  const [, setSelectedPage] = useState(1);
  // const dispatch = useDispatch();
  // const notices = useSelector(selectNotices);
  // const totalPages = useSelector(selectTotalPages);
  const totalPages = 10;

  const handlePageChange = (e: { selected: number }) => {
    // console.log(`Selected page: ${page}`);
    // setSelectedPage(page);
    setSelectedPage(e.selected + 1);
    topScroll();
  };

  // useEffect(() => {
  //   dispatch(fetchNotices(selectedPage));
  // }, [dispatch, selectedPage]);

  return (
    <Section>
      <Container>
        <TitleWrapper>
          <Title name={'Find your favorite pet'} />
        </TitleWrapper>
        <NoticesFilters />
        {
          <List>
            {notices?.map(item => (
              <NoticesItem key={item._id} item={item} />
            ))}
          </List>
        }
        <Pagination totalPages={totalPages} onPageChange={handlePageChange} />
      </Container>
    </Section>
  );
};

export default Notices;
