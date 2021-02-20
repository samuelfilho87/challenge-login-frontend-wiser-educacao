import React from 'react';
import { render, fireEvent, waitFor, findByRole, screen } from '@testing-library/react';
import { Provider } from 'react-redux'
import store from '../../store';
import Home from '../../pages/index';
import '@testing-library/jest-dom';

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "",
      pathname: "",
      query: "",
      asPath: "",
    };
  },
}));

describe("Home Page", () => {
  it('should be able to sign in', async () => {
    const useRouter = jest.spyOn(require("next/router"), "useRouter");

    const { getByTestId, getByPlaceholderText } = render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    
    const emailField = getByPlaceholderText('exemplo@mail.com');
    const passwordField = getByPlaceholderText('Senha');
    const buttonElement = getByTestId('submit');
    
    fireEvent.change(emailField, { target: { value: 'Aurore89@yahoo.com' } });
    fireEvent.change(passwordField, { target: { value: 'daCyBlBZPEKAoq6' } });
    
    fireEvent.click(buttonElement);

    useRouter.mockImplementation(() => ({
      route: "/dashboard",
      pathname: "/dashboard",
      query: "",
      asPath: "",
    }));
    
    await waitFor(() => {
      expect(useRouter).toHaveBeenCalled();
    });
  });
});
