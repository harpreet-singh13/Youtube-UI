import React from 'react'

const Button = ({name}) => {
  return (
    <div>

        <button className=' bg-gray-200 rounded-lg px-5 py-1 mx-2 my-1 '>{name}</button>
    </div>
  )
}

export default Button