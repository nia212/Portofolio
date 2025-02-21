import React from 'react'
import html from '../aset/html.png'
import css from '../aset/css.png'
import js from '../aset/js.png'
import react from '../aset/react.png'
import tailwind from '../aset/tailwind.png'

const Skills = () => {
  return (
    <div className='border border-gray-600 bg-black text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-6
                     place-items-center md:flex md:justify-between md:items-center'>

        <h2 className="text-gray-600 text-2xl md:text-4xl font-bold m-4">
        My <br/> Tech <br/> Stack
        </h2>

        <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
            <img src={html} alt=""/>
            <p className="text-gray-600 text-sm">HTML</p>
        </div>

        <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
            <img src={css} alt=""/>
            <p className="text-gray-600 text-sm">CSS</p>
        </div>

        <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
            <img src={js} alt=""/>
            <p className="text-gray-600 text-sm">Javascript</p>
        </div>

        <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
            <img src={react} alt=""/>
            <p className="text-gray-600 text-sm">React</p>
        </div>

        <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
            <img src={tailwind} alt=""/>
            <p className="text-gray-600 text-sm">Tailwind</p>
        </div>
                        
      
    </div>
  )
}

export default Skills
