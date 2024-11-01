import { Notice } from 'types';
import { List } from './noticesList.styled';
import { NoticesItem } from '../noticesItem';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../../../redux/auth';
import { selectFavorites } from '../../../../redux/notices';

interface NoticesListProps {
  notices: Notice[];
}
export const NoticesList = ({ notices }: NoticesListProps) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const favoritesNotices = useSelector(selectFavorites) as Notice[];

  return (
    <List>
      {notices?.map(item => (
        <NoticesItem
          key={item._id}
          item={item}
          isLoggedIn={isLoggedIn}
          favoritesNotices={favoritesNotices}
        />
      ))}
    </List>
  );
};
