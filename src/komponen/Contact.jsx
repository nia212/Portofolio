import React from 'react'

const Contact = () => {
  return (
    <div class="max-w[1200px] mx-auto bg-black sm:py-20 p-5" id="contact">

        <div className="text-center">
            <h2 class="text-4xl font-bold leading-tight primary-color">Contact Me</h2>
        </div>

        <div class="max-w-[800px] mx-auto">

            <div class="mt-6 bg-[#161616] rounded-xl">
                <div class="p-10">

                <form action="#" method="POST">
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                        <div>
                            <div class="mt-2.5">
                                <input type="text" name="name" id="" placeholder="Your Name"
                                    class="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border
                                    border-gray-700 rounded-md focus:outline-none focus:border-pink-600"/>
                            </div>
                        </div>

                        <div>
                            <div class="mt-2.5">
                                <input type="email" name="email" id="" placeholder="Your Email"
                                    class="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border
                                    border-gray-700 rounded-md focus:outline-none focus:border-pink-600"/>
                            </div>
                        </div>

                        <div>
                            <div class="mt-2.5">
                                <textarea name="" id="" placeholder="Your Message"
                                    class="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border
                                    border-gray-700 rounded-md focus:outline-none focus:border-pink-600" rows="4">
                                </textarea>
                            </div>
                        </div>

                        <div class="sm:col-span-2">
                            <button type="Submit"
                                class="text-xl w-full p-4 mt-2 rounded-xl bg-gradient-to-br from-blue-950 to-pink-700 text-white font-semibold">
                                Send Message
                            </button>
                        </div>

                    </div>
                </form>



                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Contact
