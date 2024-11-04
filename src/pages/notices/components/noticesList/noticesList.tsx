import { Notice } from 'types';
import { List } from './noticesList.styled';
import { NoticesItem } from '../noticesItem';
import { useSelector } from 'react-redux';
import {
  selectFavoriteNotices,
  selectIsLoggedIn,
} from '../../../../redux/auth';
import { useEffect, useState } from 'react';
import { selectFavorites } from '../../../../redux/notices';

interface NoticesListProps {
  notices: Notice[];
}
export const NoticesList = ({ notices }: NoticesListProps) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const authFavoritesNotices = useSelector(selectFavoriteNotices) as Notice[];
  const noticesFavoritesNotices = useSelector(selectFavorites);

  const [favoritesNotices, setFavoritesNotices] =
    useState<Notice[]>(authFavoritesNotices);

  useEffect(() => {
    if (isLoggedIn && noticesFavoritesNotices.length > 0) {
      setFavoritesNotices(noticesFavoritesNotices);
    }
  }, [isLoggedIn, noticesFavoritesNotices]);

  return (
    <List>
      {notices?.map(item => {
        const isFavorite = Boolean(
          favoritesNotices.find(notice => notice._id === item._id)
        );

        return (
          <NoticesItem
            key={item._id}
            item={item}
            isLoggedIn={isLoggedIn}
            isFavorite={isFavorite}
          />
        );
      })}
    </List>
  );
};
