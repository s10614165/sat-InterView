import { useRef, useState } from 'react';
import Progressbar from './components/Progressbar';
import TodoItem from './components/TodoItem';
import ToggleSwitch from './components/ToggleSwitch';
import TodoInput from './components/TodoInput';

function App() {
  const [todo, setTodo] = useState([]);
  const [isToggle, setIsToggle] = useState(false);
  const newTodo = useRef(null);

  return (
    <div className="bg-gradient-to-b from-cyan-100 to-violet-100 min-h-screen flex  justify-center">
      <div className="w-11/12">
        <h1 className=" mt-5 text-second text-4xl font-bold ">Todo List</h1>
        <h2 className="ml-1 text-second">Add things to do</h2>
        <hr className="h-[2px] border-none  bg-blue-600 " />
        <Progressbar todo={todo} />
        <TodoItem todo={todo} setTodo={setTodo} isToggle={isToggle} />
        <hr className="h-[2px] border-none  bg-blue-600 " />
        <ToggleSwitch isToggle={isToggle} setIsToggle={setIsToggle} />
        <TodoInput newTodo={newTodo} setTodo={setTodo} todo={todo} />
      </div>
    </div>
  );
}

export default App;
