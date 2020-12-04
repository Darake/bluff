import React from 'react'

const Square = ({ amount, star = false }) => {
  const bgDarkness = star ? 'dark' : 'light'
  const gridArea = star ? `star-${amount}` : `card-${amount}`
  return (
    <div className={`bg-toska-${bgDarkness}`} style={{ gridArea }} />
  )
}

const Squares = () => {
  let normalCounter = 0
  let starCounter = 0
  const squares = []
  while (normalCounter <= 20) {
    if (normalCounter % 2) {
      starCounter++
      squares.push(<Square key={`star${starCounter}`} amount={starCounter} star />)
    }
    normalCounter++
    squares.push(<Square key={`card${normalCounter}`} amount={normalCounter} />)
  }
  return squares
}

export default Squares