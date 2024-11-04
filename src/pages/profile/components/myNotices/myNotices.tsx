import { Button } from 'ui';
import {
  Accent,
  ButtonWrapper,
  MyNoticesWrapper,
  Text,
  TextWrapper,
  Wrapper,
} from './myNotices.styled';
import { useSelector } from 'react-redux';
import { selectFavoriteNotices } from '../../../../redux/auth';
import { Notice } from 'types';
import { FavoriteCard } from '../favoriteCard';

export const MyNotices = () => {
  const authFavoritesNotices = useSelector(selectFavoriteNotices) as Notice[];

  return (
    <MyNoticesWrapper>
      <ButtonWrapper>
        <Button type={'button'}>My favorite pets</Button>
      </ButtonWrapper>
      {authFavoritesNotices?.length > 0 ? (
        <Wrapper>
          {authFavoritesNotices.map(notice => (
            <FavoriteCard key={notice._id} item={notice} />
          ))}
        </Wrapper>
      ) : (
        <TextWrapper>
          <Text>
            Oops, <Accent>looks like there aren't any furries</Accent> on our
            adorable page yet. Do not worry! View your pets on the "find your
            favorite pet" page and add them to your favorites.
          </Text>
        </TextWrapper>
      )}
    </MyNoticesWrapper>
  );
};
