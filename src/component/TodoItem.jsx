import React, { useRef, useEffect } from 'react';
import Todo from './Todo';

function TodoItem(props) {
  const { todo, setTodo, toogleState } = props;

  // 若 toogleState 為 true ，則依照是否完成進行升冪排序 ，若 false ，則按照時間升冪排序
  function toggleSortArray(todos, toogleState) {
    return toogleState
      ? sortByFinishAscending(todos)
      : sortByTimeAscending(todos);
  }
  // 按照時間升冪排序
  function sortByTimeAscending(todos) {
    return todos
      .sort((a, b) => a.id - b.id)
      .map((todoitem) => (
        <Todo todo={todo} todoItem={todoitem} setTodo={setTodo} />
      ));
  }
  // 按照是否完成進行升冪排序
  function sortByFinishAscending(todos) {
    return todos
      .sort((a, b) => a.finish - b.finish)
      .map((todoitem) => (
        <Todo todo={todo} todoItem={todoitem} setTodo={setTodo} />
      ));
  }

  // 獲取 底部div DOM
  const todoItemEndRef = useRef(null);
  const scrollToBottom = () => {
    todoItemEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(scrollToBottom, [todo]);

  return (
    <div className="mt-4 mb-4 min-h-[50vh] overflow-auto h-32 scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-gray-300 overflow-y-scroll scrollbar-thumb-rounded-full">
      <ul className=" pr-4">{toggleSortArray(todo, toogleState)}</ul>
      <div ref={todoItemEndRef} />
    </div>
  );
}

export default TodoItem;
