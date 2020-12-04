import React from 'react'

const Border = ({ children }) => {
  return (
    <div className="bg-red-600 w-full flex h-full">
      <div className="m-2 bg-white box-content flex-1">
        <div className="border-solid border-black border-2 flex h-full">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Border
