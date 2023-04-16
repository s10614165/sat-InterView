import React from 'react'
import { useRef,useEffect } from 'react'
const TodoItem = (props) => {

  const {todo,setTodo,toogleState} =props

  // 修改 todo.finish 至 完成 或 未完成 
  function handleFinish (id){
    const updatedTodos =todo.map(item => item.id === id ? {...item,finish:!item.finish} :item);
    setTodo(updatedTodos);
  }
  // 刪除 todo
  function handleDelete (id){
    const updatedTodos =todo.filter(item => item.id !==id);
    setTodo(updatedTodos);
  }

  //若 toogleState 為 true ，則依照是否完成進行升冪排序 ，若 false ，則按照時間升冪排序
  function toggleSortArray(todo,toogleState) {
    return toogleState=== true
    ? 
    todo.sort((a,b)=>a.finish-b.finish).map(todo=>
      <li key={todo.id} className=' w-full bg-white mt-2 border-s-4 border-sky-800 border-solid rounded-md flex justify-between '>
         <div className=' flex items-center justify-center'>
           <input type="checkbox" className=' ml-4 w-4 h-4 ' defaultValue={todo.finish} onClick={()=>{handleFinish(todo.id)}}/>
           <span className={` ml-3 text-lg ${todo.finish &&"line-through"} `}> {todo.text}</span>
         </div>
         <div className=' mr-2 flex justify-center items-center'>
           <button type="button" onClick={()=>{handleDelete(todo.id)}}>X</button>
         </div> 
      </li>)
    :
    todo.sort((a,b)=>a.id-b.id).map(todo=>
      <li key={todo.id} className=' w-full bg-white mt-2 border-s-4 border-sky-800 border-solid rounded-md flex justify-between '>
         <div className=' flex items-center justify-center'>
           <input type="checkbox" className=' ml-4 w-4 h-4 ' defaultValue={todo.finish} onClick={()=>{handleFinish(todo.id)}}/>
           <span className={` ml-3 text-lg ${todo.finish &&"line-through"} `}> {todo.text}</span>
         </div>
         <div className=' mr-2 flex justify-center items-center'>
           <button type="button" onClick={()=>{handleDelete(todo.id)}}>X</button>
         </div> 
      </li>)
  }
  // 獲取 div DOM
  const messagesEndRef = useRef(null);
  // 
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollToBottom, [todo]);

  return (
    <div className='mt-4 mb-4 min-h-[50vh] overflow-auto h-32 scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-gray-300 overflow-y-scroll scrollbar-thumb-rounded-full'>
   
    <ul className=' pr-4'>
    {toggleSortArray(todo,toogleState)}
    </ul>
    <div ref={messagesEndRef}/>
    </div>
  )
}

export default TodoItem