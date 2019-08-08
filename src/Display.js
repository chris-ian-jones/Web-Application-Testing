import React from 'react'

const Display = (props) => {

  return (
    <>
      <p>Balls:</p>
      <p data-testid='ballsCount'>{props.balls}</p>
      <p>Strikes:</p>
      <p data-testid='strikesCount'>{props.strikes}</p>
    </>
  )
}

export default Display