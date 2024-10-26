import React from 'react'

export default function Navbar() {
    return (
        <>
            <div className='bg-[#030712] text-white p-2 w-full'>
                <ul className='list-style-type: none flex justify-center text-xl gap-5 font-semibold'>
                    {["Home", "About Me", "Connect"].map(
                        (elm, index) => (
                            <a key={index} className='hover:cursor-pointe hover:shadow-md hover:shadow-[rgb(25,104,31)]  p-2 rounded-2xl' href={`#${elm.toLowerCase().replaceAll(' ', '-')}`}>
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


