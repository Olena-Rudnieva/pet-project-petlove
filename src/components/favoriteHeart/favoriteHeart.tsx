import { Heart, IconEmpty, IconFavorite } from './favoriteHeart.styled';
import sprite from 'assets/sprite.svg';
import { Notice } from 'types';

interface FavoriteHeartProps {
  item: Notice;
  isFavorite: boolean;
  handleAddFavorites: (id: string) => void;
  handleRemoveFavorites: (id: string) => void;
}

export const FavoriteHeart = ({
  item,
  isFavorite,
  handleAddFavorites,
  handleRemoveFavorites,
}: FavoriteHeartProps) => {
  const handleToggleHeart = () => {
    if (isFavorite) {
      handleRemoveFavorites(item._id);
    } else {
      handleAddFavorites(item._id);
    }
  };

  return (
    <Heart type="button" onClick={handleToggleHeart}>
      {isFavorite ? (
        <IconFavorite>
          <use href={sprite + '#icon-heart'}></use>
        </IconFavorite>
      ) : (
        <IconEmpty>
          <use href={sprite + '#icon-heart'}></use>
        </IconEmpty>
      )}
    </Heart>
  );
};
