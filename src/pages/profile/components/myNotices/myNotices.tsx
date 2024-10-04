import { Button } from 'ui';
import {
  Accent,
  ButtonWrapper,
  MyNoticesWrapper,
  Text,
  TextWrapper,
} from './myNotices.styled';

export const MyNotices = () => {
  return (
    <MyNoticesWrapper>
      <ButtonWrapper>
        <Button
          type={'button'}
          //   width={'142px'}
          //   height={'48px'}
        >
          My favorite pets
        </Button>

        <Button
          type={'button'}
          //   width={'142px'}
          //   height={'48px'}
          //   whitebackground="true"
        >
          Viewed
        </Button>
      </ButtonWrapper>
      <TextWrapper>
        <Text>
          Oops, <Accent>looks like there aren't any furries</Accent> on our
          adorable page yet. Do not worry! View your pets on the "find your
          favorite pet" page and add them to your favorites.
        </Text>
      </TextWrapper>
    </MyNoticesWrapper>
  );
};
