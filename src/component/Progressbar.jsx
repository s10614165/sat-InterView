import React from 'react'

const Progressbar = () => {
  const percent =80
  return (
    <div className='mt-4'>
    <div className='flex flex-row justify-between'>
    <div > {`${percent}%`}</div>
   <div className='w-[90%] flex items-center'>
   <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
     <div className={`bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full`}
     style={{width: percent +'%'}}>
     </div>
     </div>
   </div>
    </div>
   

    </div>
  )
}

export default Progressbar