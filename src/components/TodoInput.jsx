import React from 'react';

function TodoInput(props) {
  const { newTodo, setTodo, todo } = props;

  // 新增Todo
  function handleAddTodo(todo) {
    if (todo.current?.value.trim() === '') return;
    // 將多餘空白刪除
    const trimTodoString = todo.current?.value.trim();
    // 若 todo 為空陣列，則新增一筆，反之則解構 preventValue ，再進行新增 todo
    setTodo((prevent) => {
      const todo = {
        text: trimTodoString,
        finish: false,
        id: Date.now(),
      };

      if (todo?.length === 0) return [todo];
      return [...prevent, todo];
    });

    todo.current.value = '';
  }
  function handleKeyPress(todo, event) {
    if (event.key === 'Enter') {
      handleAddTodo(todo);
    }
  }
  return (
    <div className="mt-8">
      <h6 className="text-second">Add to list</h6>
      <div className="flex flex-row justify-between mt-2">
        <input
          className=" w-[95%] pl-2"
          ref={newTodo}
          onKeyDown={(event) => {
            handleKeyPress(newTodo, event);
          }}
          type="text"
        />
        <div className="flex bg-blue-600 justify-center ml-1 w-6 items-center">
          <button
            className=" text-cyan-50  "
            type="button"
            onClick={() => {
              handleAddTodo(newTodo);
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoInput;
