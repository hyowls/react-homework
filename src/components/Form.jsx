import React from 'react'

const Form = ({ input, setInput, todoList, setTodoList}) => {
  const handleAddTodo = (event) => {
    event.preventDefault();
    if (!input.trim()) return;
    const addTodo = {
      id: Date.now(),
      title: input,
      completed: false,
    };
    setTodoList([...todoList, addTodo]);
    setInput("");
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };
  return (
    <form onSubmit={handleAddTodo}>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="할 일을 추가하세요"
      />
      <button type="submit">추가</button>
    </form>
  )
}

export default Form