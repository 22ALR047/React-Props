import React from 'react'

function Meassage(props) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">
          Hello, I am {props.name}!
        </h1>
        
        <div className="space-y-3 text-left">
          <p>🎂 Age: {props.age}</p>
          <p>🎓 Degree: {props.Degree}</p>
          <p>� College: {props.College}</p>
          <p>🏠 Native: {props.Native}</p>
          <p>🎯 Hobby: {props.Hobby}</p>
        </div>
        
        <p className="mt-4 text-gray-600">Nice to meet you!</p>
      </div>
    </div>
  )
}

export default Meassage
