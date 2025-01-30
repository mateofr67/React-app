import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FieldDetailpage from '../Pages/FieldDetailpage';

jest.mock('../Components/FieldDetail', () => () => <div data-testid="field-detail-component">Mocked FieldDetail</div>);

test('renderiza FieldDetail', () => {
  render(<FieldDetailpage />);
  expect(screen.getByTestId('field-detail-component')).toBeInTheDocument();
});
