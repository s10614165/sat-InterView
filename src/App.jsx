import { useRef, useState } from 'react';
import Progressbar from './component/Progressbar';
import TodoItem from './component/TodoItem';
import ToogleSwitch from './component/ToogleSwitch';
import TodoInput from './component/TodoInput';

function App() {
  const [todo, setTodo] = useState([]);
  const [toogleState, setToogleState] = useState(false);
  const newTodo = useRef(null);

  return (
    <div className="bg-gradient-to-b from-cyan-300 to-violet-500 min-h-screen flex  justify-center">
      <div className="w-11/12">
        <h1 className=" mt-5 text-second text-4xl font-bold ">Todo List</h1>
        <h2 className="ml-1 text-second">Add things to do</h2>
        <hr className="h-[2px] border-none  bg-blue-600 " />
        <Progressbar todo={todo} />
        <TodoItem todo={todo} setTodo={setTodo} toogleState={toogleState} />
        <hr className="h-[2px] border-none  bg-blue-600 " />
        <ToogleSwitch
          toogleState={toogleState}
          setToogleState={setToogleState}
        />
        <TodoInput newTodo={newTodo} setTodo={setTodo} todo={todo} />
      </div>
    </div>
  );
}

export default App;
