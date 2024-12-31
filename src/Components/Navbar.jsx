import React from 'react'

export default function Navbar() {
    return (
        <>
            <div className='bg-black text-white p-2 w-full '>
                <ul className='list-style-type: none flex justify-center text-xl gap-5 font-semibold'>
                    {["Home", "About Me", "Connect"].map(
                        (elm, index) => (
                            <a key={index} className='hover:cursor-pointer hover:text-[rgb(25,104,31)] hover:underline-offset-4 hover:text-underline p-2 rounded-2xl' href={`#${elm.toLowerCase().replaceAll(' ', '-')}`}>
                                {elm}
                            </a>
                        )
                    )}
                </ul>
            </div>
            <div className='h-0.5 bg-[#3d444d]'>

            </div>
        </>
    )
}


