import React from 'react'
import Center from './Center/index'
import Squares from './Squares'

const Board = () => {
  return (
    <div className="w-full h-0 relative" style={{ paddingBottom: '61%' }}>
      <div className="border-solid border-black border-2 bg-red-600 absolute top-0 bottom-0 right-0 left-0 flex">
        <div className="m-2 bg-white flex-1 flex">
          <div className="border-solid border-black border-t-4 border-l-4 flex-1 flex border-collapse bg-gray-900">
            <div className="board">
              <Center />
              <Squares />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Board
