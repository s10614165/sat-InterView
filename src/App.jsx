import { useState } from 'react'
import Progressbar from './component/Progressbar'
import TodoItem from './component/TodoItem'
import ToogleSwitch from './component/ToogleSwitch'
import TodoInput from './component/TodoInput'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-orange-600 min-h-screen flex  justify-center'>
      <div className=' w-11/12'>
        <h1 className=" mt-5 text-second text-4xl font-bold ">
        Todo List
        </h1>
        <h2 className='ml-1 text-second'>Add things to do</h2>
        <hr className='h-1 border-none  bg-blue-600 '></hr>
        <Progressbar/>
        <TodoItem/>
        <hr className='h-1 border-none  bg-blue-600 '></hr>
        <ToogleSwitch/>
        <TodoInput/>
        </div>
    </div>
  )
}

export default App
