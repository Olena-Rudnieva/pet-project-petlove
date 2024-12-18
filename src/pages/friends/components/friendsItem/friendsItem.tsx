import { workingDays } from 'utils';
import {
  Description,
  FriendsItemWrapper,
  Image,
  InfoWrapper,
  Link,
  NoText,
  Text,
  TextWrapper,
  Title,
  WorkingDaysWrapper,
} from './friendsItem.styled';
import { WorkDay } from 'types';

type FriendsItemProps = {
  item: {
    title: string;
    imageUrl: string;
    email?: string;
    address?: string;
    addressUrl?: string;
    phone?: string;
    workDays?: WorkDay[];
  };
};

export const FriendsItem = ({ item }: FriendsItemProps) => {
  const { title, imageUrl, email, address, addressUrl, phone, workDays } = item;

  return (
    <FriendsItemWrapper>
      <WorkingDaysWrapper>
        <p>{workingDays(workDays)[0]}</p>
      </WorkingDaysWrapper>
      <Image src={imageUrl} alt={title} />
      <InfoWrapper>
        <Title>{title}</Title>
        <TextWrapper>
          <Text>Email:</Text>
          {email ? (
            <Link href={`mailto:${email}`}>
              <Description>{email}</Description>
            </Link>
          ) : (
            <NoText>unknown</NoText>
          )}
        </TextWrapper>
        <TextWrapper>
          <Text>Address:</Text>
          {address ? (
            <Link href={addressUrl} target="_blank">
              <Description>{address}</Description>
            </Link>
          ) : (
            <NoText>unknown</NoText>
          )}
        </TextWrapper>
        <TextWrapper>
          <Text>Phone:</Text>
          {phone ? (
            <Link href={`tel:${phone}`}>{phone}</Link>
          ) : (
            <NoText>unknown</NoText>
          )}
        </TextWrapper>
      </InfoWrapper>
    </FriendsItemWrapper>
  );
};
