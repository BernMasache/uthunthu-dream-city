import Link from 'next/link';
import React from 'react'
import projects from '../../data/projects';

const ScrollCarousel = () => {

  return (
    <>
   
      <div className="flex item-center p-4 justify-evenly bg-gray-200 mb-4">
        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {
            [1, 2, 4].map((item, key) => {
              return <div key={key} className="group relative items-center justify-center overflow-hidden cursor-pointer rounded-lg">
                <div className="h-full w-full">
                  <img src="./assets/pack_1/5.jpg" alt="" className="h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-trabsparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70" />
                <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[100%] group-hover:translate-y-0 transition-all">
                  <h1 className="text-3xl font-bold text-white">
                    text sample
                  </h1>
                  <p className="text-lg italic text-white mb-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto officia quas quis enim tenetur consequatur velit, facere nihil culpa corporis.
                  </p>
                  <div className="">
                    <Link href={"#"}>

                      <span className='p-2 bg-green-500 text-white text-semibold rounded-lg'>Read more...</span>
                    </Link>
                  </div>
                </div>
              </div>

            })
          }
        </div>

        <div className="fixed bottom-16">
          <p className="text-2xl font-semibold">

          </p>
        </div>
      </div>
    </>
  )
}

export default ScrollCarousel
