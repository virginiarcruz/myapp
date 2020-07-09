import React, { useState, useCallback } from 'react';
import DayPicker, { DayModifiers } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  Calendar,
  NextAppointment,
  Section,
  Appointment,
} from './styles';

import logoImg from '../../assets/logo.svg';
import { FiPower, FiClock } from 'react-icons/fi';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { signOut, user } = useAuth();

  const handleDateChange = useCallback((day: Date, modifiers: DayModifiers) => {
    if (modifiers.available) {
      setSelectedDate(day);
    }
  }, []);

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="Gobarber" />

          <Profile>
            <img
              src="https://avatars2.githubusercontent.com/u/5655363?s=460&u=1c0587ba50c4bae47bf1c8b6c6d2b95fa8968deb&v=4"
              alt={user.name}
            />

            <div>
              <span>Bem-vinda</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>
      <Content>
        <Schedule>
          <h1> Horários agendados </h1>
          <p>
            <span>Hoje</span>
            <span>Dia 06</span>
            <span>Segunda-feira</span>
          </p>
          <NextAppointment>
            <h2>Atendimento a seguir</h2>
            <div>
              <img
                src="https://avatars2.githubusercontent.com/u/5655363?s=460&u=1c0587ba50c4bae47bf1c8b6c6d2b95fa8968deb&v=4"
                alt={user.name}
              />
              <strong>Vick Cruz</strong>
              <span>
                <FiClock />
                08:00
              </span>
            </div>
          </NextAppointment>

          <Section>
            <h3>Manhã</h3>
            <Appointment>
              <span>
                <FiClock />
                08:30
              </span>
              <div>
                <img
                  src="https://avatars2.githubusercontent.com/u/5655363?s=460&u=1c0587ba50c4bae47bf1c8b6c6d2b95fa8968deb&v=4"
                  alt={user.name}
                />
                <strong>Vick Cruz</strong>
              </div>
            </Appointment>
            <Appointment>
              <span>
                <FiClock />
                08:30
              </span>
              <div>
                <img
                  src="https://avatars2.githubusercontent.com/u/5655363?s=460&u=1c0587ba50c4bae47bf1c8b6c6d2b95fa8968deb&v=4"
                  alt={user.name}
                />
                <strong>Vick Cruz</strong>
              </div>
            </Appointment>
          </Section>
          <Section>
            <h3>Tarde</h3>
            <Appointment>
              <span>
                <FiClock />
                08:30
              </span>
              <div>
                <img
                  src="https://avatars2.githubusercontent.com/u/5655363?s=460&u=1c0587ba50c4bae47bf1c8b6c6d2b95fa8968deb&v=4"
                  alt={user.name}
                />
                <strong>Vick Cruz</strong>
              </div>
            </Appointment>
          </Section>
        </Schedule>
        <Calendar>
          <DayPicker
            weekdaysShort={['D', 'S', 'T', 'Q', 'Q', 'S', 'S']}
            fromMonth={new Date()}
            disabledDays={[{ daysOfWeek: [0, 6] }]}
            modifiers={{
              available: { daysOfWeek: [1, 2, 3, 4, 5] },
            }}
            onDayClick={handleDateChange}
            selectedDays={selectedDate}
            months={[
              'Janeiro',
              'Fevereiro',
              'Março',
              'Abril',
              'Maio',
              'Junho',
              'Julho',
              'Agosto',
              'Setembro',
              'Outubro',
              'Novembro',
              'Dezembro',
            ]}
          />
        </Calendar>
      </Content>
    </Container>
  );
};

export default Dashboard;
