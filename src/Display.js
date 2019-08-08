import React from 'react'

const Display = (props) => {

  return (
    <>
      <p data-testid='ballsCount2'>{props.balls}</p>
      <p data-testid='strikesCount'>Strikes: {props.strikes}</p>
    </>
  )
}

export default Display