import React from 'react'

const Dashboard = (props) => {
  return (
    <>
      <button onClick={props.recordStrike}>Strike</button>
      <button data-testid = 'ball' onClick={props.recordBall}>Ball</button>
      <button onClick={props.recordFoul}>Foul</button>
      <button onClick={props.recordHit}>Hit</button>
    </>
  )
}

export default Dashboard