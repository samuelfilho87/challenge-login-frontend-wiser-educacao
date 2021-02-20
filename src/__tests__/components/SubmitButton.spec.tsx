import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../../components/SubmitButton';

jest.mock('@unform/core', () => {
  return {
    useField() {
      return {
        fieldName: 'email',
        defaultValue: '',
        error: '',
        registerField: jest.fn(),
      };
    },
  };
});

describe('Submit button component', () => {
  it('should be able to render a button', () => {
    const { getByText } = render(
      <Button type="submit">Entrar</Button>,
    );

    expect(getByText('Entrar')).toBeTruthy();
  });

  it('must change the gradient when the mouse hover on him', async () => {
    const { getByText } = render(
      <Button type="submit">Entrar</Button>,
    );

    const buttonElement = getByText('Entrar');

    fireEvent.mouseOver(buttonElement);

    await waitFor(() => {
      expect(buttonElement).toHaveStyle('background: linear-gradient(267.79deg, #9D25B0 0%, #383E71 99.18%)');
    });
  });
});
