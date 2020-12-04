import React from 'react'
import Border from '../Border'
import Logo from './Logo'
import DiceGraveyard from './DiceGraveyard'

const Center = () => {
  return (
    // <div className="col-start-3 col-end-12 row-start-3 row-end-7">
    <div style={{ gridArea: 'center' }}>
      <Border>
        <div className="flex-1 flex justify-center">
          <DiceGraveyard />
          <Logo />
          <DiceGraveyard />
        </div>
      </Border>
    </div>
  )
}

export default Center