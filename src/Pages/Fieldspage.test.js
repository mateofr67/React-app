import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Fieldspage from '../Pages/Fieldspage';

jest.mock('../Components/Fields', () => () => <div data-testid="fields-component">Mocked Fields</div>);

test('renderiza el componente Fields', () => {
  render(<Fieldspage />);
  expect(screen.getByTestId('fields-component')).toBeInTheDocument();
});
