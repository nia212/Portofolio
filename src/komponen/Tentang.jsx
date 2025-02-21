import React from 'react'
import about from '../aset/about.jpg'

const Tentang = () => {
  return (
    <div className="text-white max-w-[1200px] mx-auto my-12" id="about">

      <div className='md:grid md:grid-cols-2 md:gap-8'>

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full justify-start py-6 md:py-0">
          <div className="my-auto mx-6">
            <h2 className="text-4xl font-bold mb-4 primary-color">About Me</h2>
            <p className="text-base lg:text-lg">
              I am a Frontend Developer and Web Designer. I am passionate about creating eye-catching and responsive websites. I have experience in HTML, CSS, Javascript, React, and Tailwind CSS. I am a quick learner and always eager to learn new technologies.
            </p>
          </div>
        </div>

        <img className="mx-auto rounded-3xl py-8 md:py-0" src={about} width={300} height={300}/>

      </div>
      

    </div>
  )
}

export default Tentang
