import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';

import { Container, Toast } from './styles';

const ToastContainer: React.FC = () => {
  return (
    <Container>
      <Toast type="info" hasDescription>
        <FiAlertCircle size={20} />
        <article>
          <strong>Aconteceu um erro</strong>
          <p>Não foi possível fazer o login na aplicação</p>
        </article>

        <button type="button">
          <FiXCircle size={18} />
        </button>
      </Toast>
      <Toast type="success" hasDescription={false}>
        <FiAlertCircle size={20} />
        <article>
          <strong>Aconteceu um erro</strong>
        </article>

        <button type="button">
          <FiXCircle size={20} />
        </button>
      </Toast>
      <Toast type="error" hasDescription>
        <FiAlertCircle size={20} />
        <article>
          <strong>Aconteceu um erro</strong>
          <p>Não foi possível fazer o login na aplicação</p>
        </article>

        <button type="button">
          <FiXCircle size={20} />
        </button>
      </Toast>
    </Container>
  );
};

export default ToastContainer;
