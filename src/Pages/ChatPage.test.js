import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ChatPage from '../Pages/ChatPage';

jest.mock('../Components/Chat', () => () => <div data-testid="chat-component">Mocked Chat</div>);

test('renderiza el  Chat', () => {
  render(<ChatPage />);
  expect(screen.getByTestId('chat-component')).toBeInTheDocument();
});
