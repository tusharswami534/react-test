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
            <button onClick={toggleSideBar} className='md:hidden text-white ml-5 mt-4  overflow-hidden  relative z-[51]'>
                <span className={`flex w-8 h-1.5 rounded-sm bg-black transition-all duration-300 ${ open ? ' bg-white translate-x-10' : '' }`}></span>
                <span className={`flex w-8 h-1.5 rounded-sm bg-white mt-1 relative after:w-full after:h-full after:absolute after:left-0 after:top-0 after:bg-black after:transition-all after:duration-700 after:rounded-sm ${ open ? 'rotate-45 after:rotate-90 bg-white after:bg-white' : ''}`}></span>
                <span className={`flex w-8 h-1.5 rounded-sm bg-black mt-1 transition-all duration-500 ${ open ? ' bg-white -translate-x-10' : '' }`}></span>
            </button>
            <div className={` bg-black max-w-[225px] transition-all duration-300 max-md:pt-12 max-md:fixed -left-full top-0 z-50 min-h-screen flex flex-col justify-between p-5 ${ open ? 'left-0' : '' }`}>
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
