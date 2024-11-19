import React, { useState } from 'react'
import { SIDE_BAR_DATA, SIDE_BAR_DATA_2 } from '../common/Helper'
import { SideBarLogo } from '../common/Icon'

const Sidebar = () => {
    const [ open  ,setOpen] = useState(false)
    const toggleSideBar = () => {
        setOpen(!open)
    }
  return (
    <div>
        <div>
            <button onClick={toggleSideBar} className='md:hidden text-white ml-5 mt-4    relative z-5'>
                <span className='flex w-6 h-1.5 rounded-sm bg-white'></span>
                <span className='flex w-8 h-1.5 rounded-sm bg-white mt-2'></span>
            </button>
            <div className=' bg-black max-w-[225px] transition-all duration-300 max-md:fixed -left-full top-0 z-50 min-h-screen flex flex-col justify-between p-5'>
                <div>
                    <div>
                    <a className='text-white pt-2' href="/contact">
                    <SideBarLogo/></a>
                    </div>
                    <div className='pt-5 flex flex-col  gap-6'>
                        {SIDE_BAR_DATA.map((data , index) => (
                            <div key={index}>
                                <button id='{data.tabId} ' className='text-white flex gap-3 items-center text-xl'>
                                    {data.tabIcon}
                                    {data.tabName}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    {SIDE_BAR_DATA_2.map((data , index) => (
                        <div key={index}>
                            <a className='text-white pt-2' href={data.tabLink}>
                                {data.tabName}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
