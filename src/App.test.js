import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { render, fireEvent, getByTestId } from '@testing-library/react'
import '@testing-library/react/cleanup-after-each'


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('displays the count of balls', () => {
  const { getByTestId } = render(<App />)
  expect(getByTestId('ballsCount').textContent).toBe('0')
})

it('increments count of balls on click of ball function', () => {
  const { getByTestId } = render(<App />)
  fireEvent.click(getByTestId('ball'))
  expect(getByTestId('ballsCount').textContent).toBe('1')
})





