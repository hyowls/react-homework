import React from 'react'

const List = ({ todoList, setTodoList, children}) => {
  const handleToggleTodo = (id) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  return (
    <ul>
      {todoList.map((todo) => (
        <li
          key={todo.id}
          style={{ textDecoration: todo.completed ? "line-through" : "none", border: "2px solid black", width:'300px', padding:'10px', margin:"15px 0"}}
        >
          {todo.title}
          <button onClick={() => handleToggleTodo(todo.id)} style={{ margin: '0 10px'}}>
            {todo.completed ? "취소" : "완료"}
          </button>
          <button onClick={() => handleDeleteTodo(todo.id)}>삭제</button>
        </li>
      ))}
    </ul>
  )
}

export default List