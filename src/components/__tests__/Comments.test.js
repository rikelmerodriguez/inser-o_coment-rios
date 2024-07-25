// Comments.test.js

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App'; // Supondo que o componente principal é o App

test('should insert two comments', () => {
  render(<App />);

  // Supondo que há um botão para adicionar comentários e um campo de texto
  const input = screen.getByTestId('comment-input');
  const button = screen.getByTestId('add-comment-button');

  // Adicionando o primeiro comentário
  fireEvent.change(input, { target: { value: 'Primeiro comentário' } });
  fireEvent.click(button);

  // Adicionando o segundo comentário
  fireEvent.change(input, { target: { value: 'Segundo comentário' } });
  fireEvent.click(button);

  // Verificando se os comentários foram inseridos
  expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();
  expect(screen.getByText('Segundo comentário')).toBeInTheDocument();
});
