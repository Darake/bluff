import React from 'react'

const Logo = () => {
  return (
    <div className="flex bg-gray-800 flex items-center justify-center" style={{ flex: 2 }}>
      <img src="/bluff.png" alt="bluff logo" style={{ maxHeight: '75%' }} />
      <img src="/toska.png" alt="toska logo" style={{ maxHeight: '50%' }} />
    </div>
  )
}

export default Logo