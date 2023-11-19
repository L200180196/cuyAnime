import React from 'react'

export const Loading = () => {
  return (
    // <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
    //     <h3 className={`font-bold md:text-xl text-md p-4 shimmer h-64`}></h3>
    //     <h3 className={`font-bold md:text-xl text-md p-4 shimmer h-64`}></h3>
    //     <h3 className={`font-bold md:text-xl text-md p-4 shimmer h-64`}></h3>
    //     <h3 className={`font-bold md:text-xl text-md p-4 shimmer h-64`}></h3>
    //     <h3 className={`font-bold md:text-xl text-md p-4 shimmer h-64`}></h3>
    //     <h3 className={`font-bold md:text-xl text-md p-4 shimmer h-64`}></h3>   
    //     <h3 className={`font-bold md:text-xl text-md p-4 shimmer h-64`}></h3>
    //     <h3 className={`font-bold md:text-xl text-md p-4 shimmer h-64`}></h3>   
    // </div>
    <div className='flex justify-center items-center min-h-screen'>
        <div className='flex justify-center items-center loading'></div>
    </div>
  )
}

export default Loading
