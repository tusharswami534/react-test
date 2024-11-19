import React, { useState } from 'react'

const UseSate = () => {
    const [ count, setCount ] = useState(0)

  return (
    <div  className=''>
        <h1 className='text-4xl font-bold text-center pb-10'>Use State</h1>
        <h1 className='text-3xl font-bold text-center pb-10'>{count}</h1>
        <div className='flex justify-center gap-5'>
        <button onClick={() => setCount(count + 1)} className='py-2 px-5 bg-black rounded-md text-white '>Increment</button>
        <button onClick={() => setCount(count - 1 > 0 ? count - 1 : 0)} className='py-2 px-5 bg-black rounded-md text-white '>Decrement</button>
        </div>
    </div>
  )
}

export default UseSate
