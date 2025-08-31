import React from 'react'

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="relative w-11 h-11 border-4 border-gray-300 border-t-primary rounded-full animate-spin-slow"></div>
    </div>
  )
}

export default Loader
