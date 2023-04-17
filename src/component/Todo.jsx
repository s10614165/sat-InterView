import React from 'react';

const Todo = (props) => {
  const { todo, setTodo, todoItem } = props;

  // 修改 todo.finish 至 完成 或 未完成
  function handleFinish(id, todos) {
    const updatedTodos = todos.map((item) =>
      item.id === id ? { ...item, finish: !item.finish } : item
    );
    setTodo(updatedTodos);
  }
  // 刪除 todo
  function handleDelete(id, todos) {
    const updatedTodos = todos.filter((item) => item.id !== id);
    setTodo(updatedTodos);
  }

  return (
    <li
      key={todoItem.id}
      className=" w-full bg-white mt-2 border-s-4 border-sky-800 border-solid rounded-md flex justify-between "
    >
      <div className=" flex items-center justify-center">
        <input
          type="checkbox"
          className=" ml-4 w-4 h-4 "
          defaultChecked={todoItem.finish}
          onClick={() => {
            handleFinish(todoItem.id, todo);
          }}
        />
        <span className={` ml-3 text-lg ${todoItem.finish && 'line-through'} `}>
          {' '}
          {todoItem.text}
        </span>
      </div>
      <div className=" mr-2 flex justify-center items-center">
        <button
          className=" text-cancle"
          type="button"
          onClick={() => {
            handleDelete(todoItem.id, todo);
          }}
        >
          X
        </button>
      </div>
    </li>
  );
};

export default Todo;
