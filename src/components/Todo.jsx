import React, { useEffect } from 'react';

const Todo = (props) => {
  const { todo, setTodo, todoItem } = props;

  // 修改 todo.finish 至 完成 或 未完成
  function handleFinish(id, todos) {
    const updateTodos = todos.map((item) =>
      item.id === id ? { ...item, finish: !item.finish } : item
    );
    setTodo(updateTodos);
  }
  // 刪除 todo
  function handleDelete(id, todos) {
    const updateTodos = todos.filter((item) => item.id !== id);
    setTodo(updateTodos);
  }
  function handleEdit(id, originalContent) {
    const editContent = prompt('請輸入修改內容', originalContent);
    if (!editContent) return;
    setTodo(
      todo.map((todo) => {
        return {
          ...todo,
          text: todo.id === id ? editContent : todo.text,
        };
      })
    );
  }

  return (
    <li
      key={todoItem.id}
      className=" w-full py-4 bg-white mt-2 border-s-4 border-sky-800 border-solid rounded-md flex justify-between "
    >
      <div className=" flex items-center justify-center">
        <input
          type="checkbox"
          className=" ml-4 w-4 h-4 "
          value={todoItem.finish}
          onChange={() => {
            handleFinish(todoItem.id, todo);
          }}
        />
        <span className={` ml-3 text-lg ${todoItem.finish && 'line-through'} `}>
          {todoItem.text}
        </span>
      </div>
      <div className=" mr-2 flex justify-center items-center">
        <button
          className=" mr-4"
          type="button"
          onClick={() => {
            handleEdit(todoItem.id, todoItem.text);
          }}
        >
          Edit
        </button>
        <button
          className=" text-delete"
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
