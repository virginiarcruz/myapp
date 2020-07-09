import styled from 'styled-components';

import {
  grayDark,
  grayDarken,
  orange,
  grayLighter,
  grayLight,
  grayMedium,
  white,
  grayHigh,
} from '../../styles/colors';

export const Container = styled.div``;

export const Header = styled.div`
  padding: 32px 0;
  background: ${grayDarken};
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  > img {
    height: 80px;
  }

  button {
    margin-left: auto;
    background: transparent;
    border: 0;

    svg {
      color: ${grayLight};
      height: 20px;
      width: 20px;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 80px;

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    span {
      color: ${grayLighter};
    }

    strong {
      color: ${orange};
    }

    a {
      text-decoration: none;
      color: ${orange};

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;

export const Content = styled.main`
  max-width: 1120px;
  margin: 64px auto;
  display: flex;
`;

export const Schedule = styled.div`
  flex: 1;
  margin-right: 120px;

  h1 {
    font-size: 36px;
  }

  p {
    margin-top: 8px;
    color: ${orange};
    display: flex;
    align-items: center;
    font-weight: 500;

    span {
      display: flex;
      align-items: center;
    }

    span + span::before {
      content: '';
      width: 1px;
      height: 12px;
      background: ${orange};
      margin: 0 8px;
    }
  }
`;

export const NextAppointment = styled.aside`
  margin-top: 64px;

  > h2 {
    color: ${grayMedium};
    font-size: 20px;
    font-weight: 400;
  }

  div {
    background: ${grayHigh};
    display: flex;
    align-items: center;
    padding: 16px 24px;
    border-radius: 10px;
    margin-top: 24px;
    position: relative;

    &::before {
      position: absolute;
      height: 80%;
      width: 1px;
      left: 0;
      top: 10%;
      content: '';
      background: ${orange};
    }

    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }

    strong {
      margin-left: 24px;
      color: ${white};
    }

    span {
      margin-left: auto;
      display: flex;
      align-items: center;
      color: ${grayMedium};

      svg {
        color: ${orange};
        margin-right: 8px;
      }
    }
  }
`;

export const Section = styled.section`
  margin-top: 48px;

  > h3 {
    color: ${grayMedium};
    font-size: 20px;
    line-height: 26px;
    border-bottom: 1px solid ${grayHigh};
    display: block;
    padding-bottom: 16px;
    margin-bottom: 16px;
  }

  > p {
    color: ${grayMedium};
  }
`;

export const Appointment = styled.div`
  display: flex;
  align-items: center;

  & + div {
    margin-top: 16px;
  }

  span {
    margin-left: auto;
    display: flex;
    align-items: center;
    color: ${grayLighter};
    width: 70px;

    svg {
      color: ${orange};
      margin-right: 8px;
    }
  }

  div {
    flex: 1;
    background: ${grayHigh};
    display: flex;
    align-items: center;
    padding: 16px 24px;
    border-radius: 10px;
    margin-left: 24px;

    img {
      width: 56px;
      height: 56px;
      border-radius: 50%;
    }

    strong {
      margin-left: 24px;
      color: ${white};
      font-size: 20px;
    }
  }
`;

export const Calendar = styled.aside`
  width: 380px;

  .DayPicker {
    background: ${grayDarken};
    border-radius: 10px;
  }

  .DayPicker-wrapper {
    padding-bottom: 0;
  }

  .DayPicker,
  .DayPicker-Month {
    width: 100%;
  }

  .DayPicker-Month {
    border-collapse: separate;
    border-spacing: 8px;
    margin: 16px;
  }

  .DayPicker-Day {
    width: 40px;
    height: 40px;
  }

  .DayPicker-Day--available:not(.DayPicker-Day--outside) {
    background: ${grayHigh};
    border-radius: 10px;
    color: ${white};
  }

  .DayPicker:not(.DayPicker--interactionDisabled)
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
  }

  .DayPicker-Day--today {
    font-weight: normal;
  }

  .DayPicker-Day--disabled {
    color: ${grayLight} !important;
    background: transparent !important;
  }

  .DayPicker-Day--selected {
    background: ${orange} !important;
    border-radius: 10px;
    color: ${grayDark} !important;
  }
`;
