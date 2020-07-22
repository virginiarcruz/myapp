import React from 'react';

import { useAuth } from '../../hooks/auth';
import Icon from 'react-native-vector-icons/Feather';
import { useRoute, useNavigation } from '@react-navigation/native';

import {
  Container,
  Header,
  BackButton,
  HeaderTitle,
  UserAvatar,
} from './styles';

interface RouteParams {
  providerId: string;
}

const CreateAppointment: React.FC = () => {
  const { user } = useAuth();
  const route = useRoute();
  const { goBack } = useNavigation();

  const { providerId } = route.params as RouteParams;

  return (
    <Container>
      <Header>
        <BackButton onPress={goBack}>
          <Icon name="chevron-left" size={14} color="#999591" />
        </BackButton>

        <HeaderTitle>Cabeleireiro</HeaderTitle>
        <UserAvatar
          source={{
            uri:
              'https://avatars2.githubusercontent.com/u/5655363?s=460&u=1c0587ba50c4bae47bf1c8b6c6d2b95fa8968deb&v=4',
          }}
        />
      </Header>
    </Container>
  );
};

export default CreateAppointment;
