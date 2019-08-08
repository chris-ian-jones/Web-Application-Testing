import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { render, cleanup, fireEvent, waitForElement, getByTestId } from '@testing-library/react'
import '@testing-library/react/cleanup-after-each'


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('displays the count', () => {
  const { getByTestId } = render(<App />)
  expect(getByTestId('ballsCount').textContent).toBe('0')
})




