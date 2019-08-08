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

it('displays the count of balls and strikes', () => {
  const { getByTestId } = render(<App />)
  expect(getByTestId('ballsCount').textContent).toBe('0')
  expect(getByTestId('strikesCount').textContent).toBe('0')
})

it('increments count of balls by 1 on click of ball button', () => {
  const { getByTestId } = render(<App />)
  fireEvent.click(getByTestId('ball'))
  expect(getByTestId('ballsCount').textContent).toBe('1')
})

it('resets count of balls and strikes to 0 on click of hit button', () => {
  const { getByTestId } = render(<App />)
  fireEvent.click(getByTestId('hit'))
  expect(getByTestId('ballsCount').textContent).toBe('0')
  expect(getByTestId('strikesCount').textContent).toBe('0')
})

it('if strikes count = 0, clicking foul button sets strike count to 1, and increments ball count by one', () => {
  const { getByTestId } = render(<App />)
  fireEvent.click(getByTestId('foul'))
  expect(getByTestId('strikesCount').textContent).toBe('1')
  expect(getByTestId('ballsCount').textContent).toBe('1')
})

it('increments count of strikes and balls by 1 on click of strike button', () => {
  const { getByTestId } = render(<App />)
  fireEvent.click(getByTestId('strike'))
  expect(getByTestId('strikesCount').textContent).toBe('1')
  expect(getByTestId('ballsCount').textContent).toBe('1')
})







