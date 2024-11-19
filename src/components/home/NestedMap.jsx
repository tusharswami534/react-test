import React from 'react'
import { CARD_DATA } from '../common/Helper'

const NestedMap = () => {
  return (
    <div className='py-10'>
        <div className='flex gap-5 flex-wrap justify-center'>
      {CARD_DATA.map((obj, index) => (
        <div className='' key={index}>
            <div className='bg-black border-2 border-red-500 rounded-lg max-w-[300px] p-5'>
                <p className='text-white'>{obj.heading}</p>
                <p className='text-white'>{obj.describe}</p>
                {obj.content.map((val, i) => (
                    <div key={i}>
                        <p className="text-white">{val.item}</p>
                        <button className=" py-2 px-3 bg-white mt-2 rounded-md font-bold border border-transparent transition-all duration-300 hover:bg-black hover:border-white hover:text-white">{val.button}</button>
                    </div>
                ))}
            </div>
            
        </div>
      ))}
      </div>
    </div>
  )
}

export default NestedMap
