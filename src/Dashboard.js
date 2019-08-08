import React from 'react'

const Dashboard = (props) => {
  return (
    <>
      <button data-testid = 'strike' onClick={props.recordStrike}>Strike</button>
      <button data-testid = 'ball' onClick={props.recordBall}>Ball</button>
      <button data-testid = 'foul' onClick={props.recordFoul}>Foul</button>
      <button data-testid = 'hit' onClick={props.recordHit}>Hit</button>
    </>
  )
}

export default Dashboard