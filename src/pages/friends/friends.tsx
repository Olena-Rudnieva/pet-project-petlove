import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFriends } from '../../redux/friends/friendsOperations';
import { selectFriends } from '../../redux/friends/friendsSelector';

import { List, Section } from './friends.styled';
import { Container } from 'ui/container';

import { TitleWrapper } from 'pages/notices/notices.styled';
import { FriendsItem } from './components/friendsItem';
import { Title } from 'ui';
import { AppDispatch } from 'redux/store';
import { Friend } from 'types';

const Friends = () => {
  const dispatch = useDispatch<AppDispatch>();
  const friends = useSelector(selectFriends) as Friend[] | undefined;

  useEffect(() => {
    dispatch(fetchFriends());
  }, [dispatch]);

  return (
    <Section>
      <Container>
        <TitleWrapper>
          <Title name={'Our friends'} />
        </TitleWrapper>
        <List>
          {friends?.map(item => (
            <FriendsItem key={item._id} item={item} />
          ))}
        </List>
      </Container>
    </Section>
  );
};

export default Friends;
