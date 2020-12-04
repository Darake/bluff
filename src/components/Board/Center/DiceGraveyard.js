import React from 'react'

const DiceSpot = () => {
  return (
    <div className="h-full">
      <div className="inline-block h-full border-2 border-white bg-gray-800" >
          <img
            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
            alt="irrelevant"
            className="block h-full"
            style={{ width: 'auto' }}
          />
      </div>
    </div>
  )
}

const EmptySpot = () => {
  return (
    <div className="h-full">
      <div className="inline-block h-full" >
          <img
            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
            alt="irrelevant"
            className="block h-full"
            style={{ width: 'auto' }}
          />
      </div>
    </div>
  )
}

const DiceGraveyard = () => {
  return (
    <div className="bg-toska-dark p-2 flex-1 flex">
      <div className="flex-1 h-full mx-auto flex flex-col">
        <div className="flex-1 flex">
          <DiceSpot />
          <EmptySpot />
          <DiceSpot />
        </div>
        <div className="flex-1 flex">
          <EmptySpot />
          <DiceSpot />
          <EmptySpot />
        </div>
        <div className="flex-1 flex">
          <DiceSpot />
          <EmptySpot />
          <DiceSpot />
        </div>
        <div className="flex-1 flex">
          <EmptySpot />
          <DiceSpot />
          <EmptySpot />
        </div>
        <div className="flex-1 flex">
          <DiceSpot />
          <EmptySpot />
          <DiceSpot />
        </div>
      </div>
    </div>
  )
}

export default DiceGraveyard