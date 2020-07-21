import React, { useCallback } from 'react';

import { useAuth } from '../../hooks/auth';
import {
  Container,
  Header,
  HeaderTitle,
  UserName,
  ProfileButton,
  UserAvatar,
} from './styles';
import { useNavigation } from '@react-navigation/native';

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();
  const { navigate } = useNavigation();

  const navigateToProfile = useCallback(() => {
    navigate('Profile');
  }, [navigate]);

  return (
    <Container>
      <Header>
        <HeaderTitle>
          Bem vindo,{'\n'}
          <UserName>{user.name}</UserName>
        </HeaderTitle>

        <ProfileButton onPress={navigateToProfile}>
          <UserAvatar
            source={{
              uri:
                'https://avatars2.githubusercontent.com/u/5655363?s=460&u=1c0587ba50c4bae47bf1c8b6c6d2b95fa8968deb&v=4',
            }}
          />
        </ProfileButton>
      </Header>
    </Container>
  );
};

export default Dashboard;
