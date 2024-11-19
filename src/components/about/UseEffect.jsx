import React, { useEffect, useState } from 'react'

const UseEffect = () => {
        const [ count, setCount ] = useState(0)
        useEffect(() => {
            setTimeout(() => {
                setCount(count + 1)
            } , 1000)
        })
  return (
    <div>
        <h1 className='text-5xl font-bold pb-5 text-center pt-5'>Use Effect</h1>
        <p className='text-3xl text-center text-red-500'>{count}</p>
    </div>
  )
}

export default UseEffect
