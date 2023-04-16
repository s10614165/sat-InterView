import React from 'react'

const TodoInput = (props) => {
  const {newTodo,setTodo,todo}=props

  //新增Todo
  function handleAddTodo (todo){
    
    //將多餘空白刪除
    const TrimTodoString = todo.current?.value.trim()
    //若 todo 為空陣列，則新增一筆，反之則解構 preventValue ，再進行新增 todo 
    setTodo(preventValue =>  todo?.length===0 ? 
      [{text:TrimTodoString,finish:false,id:Date.now()}] :
      [...preventValue,{text:TrimTodoString,finish:false,id:Date.now()}])

    todo.current.value=""
  }
  return (
    <div className='mt-8'>

      <h6 className='text-second'>Add to list</h6>
      <div className='flex flex-row justify-between mt-2'>
       
        <input  className=' w-[95%] pl-2' ref={newTodo} type='text'/>
        <div className='flex bg-blue-600 justify-center ml-1 w-6 items-center'>
        <button  className=' text-cyan-50  ' type='button' onClick={()=>{handleAddTodo(newTodo)}}> + </button>
        </div>
       
        </div>
    </div>
  )
}

export default TodoInput