import React from 'react'

const Display = ({ balls, strikes }) => {
  return (
    <>
      <p>Balls:</p>
      <p data-testid='ballsCount'>{balls}</p>
      <p>Strikes:</p>
      <p data-testid='strikesCount'>{strikes}</p>
    </>
  )
}

export default Display