// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchFriends } from '../../redux/friends/friendsOperations';
// import { selectFriends } from '../../redux/friends/friendsSelector';

import { List, Section } from './friends.styled';
import { Container } from 'ui/container';
import { Title } from 'ui/title';
import { TitleWrapper } from 'pages/notices/notices.styled';
import { FriendsItem } from './components/friendsItem';

type FriendType = {
  _id: string;
  title: string;
  imageUrl: string;
  email?: string;
  address?: string;
  addressUrl?: string;
  phone?: string;
  workDays?: { from: string; to: string }[];
};

const friends = [
  {
    _id: '12345',
    title: 'Animal Shelter',
    imageUrl: 'https://example.com/image.jpg',
    email: 'info@animalshelter.com',
    address: '123 Main Street, City, Country',
    addressUrl: 'https://maps.example.com/address',
    phone: '+1234567890',
    workDays: [
      {
        from: '09:00',
        to: '18:00',
      },
      {
        from: '09:00',
        to: '16:00',
      },
    ],
  },
];

const Friends = () => {
  //   const dispatch = useDispatch();
  //   const friends = useSelector(selectFriends) as FriendType[] | undefined;

  //   useEffect(() => {
  //     dispatch(fetchFriends());
  //   }, [dispatch]);

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
