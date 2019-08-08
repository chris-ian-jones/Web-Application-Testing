import React from 'react'

const Dashboard = (props) => {
  console.log(props)

  const recordStrike = props.recordStrike
  
  return (
    <>
      <button onClick={recordStrike}>Strike</button>
      <button onClick={props.recordBall}>Ball</button>
      <button onClick={props.recordFoul}>Foul</button>
      <button onClick={props.recordHit}>Hit</button>
    </>
  )
}

export default Dashboard