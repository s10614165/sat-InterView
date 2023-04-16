import React from 'react'

const Progressbar = (props) => {
  const {todo}=props

  //計算已完成項目的百分比
  const percent = (todo)=>{
    const AllTodoLength =todo.length
    const FinishtodoLength =todo.filter(item=> item.finish ===true).length
    return AllTodoLength===0?0: Math.round(FinishtodoLength/AllTodoLength*100)
  }
  return (
    <div className='mt-4'>
      <div className='flex flex-row justify-between'>
        <h6 className=' text-second'> {`${percent(todo)}%`}</h6>
         <div className='w-[90%] flex items-center'>
            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
            <div className={`bg-blue-600 text-xs font-medium h-2.5 text-blue-100 text-center p-0.5 leading-none rounded-full`} style={{width: percent(todo) +'%'}}>
            </div>
        </div>
      </div>
    </div>
   

    </div>
  )
}

export default Progressbar