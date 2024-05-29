import { useState } from "react";
import Form from "./components/Form";
import Title from "./components/Title";
import List from "./components/List";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [input, setInput] = useState("");


  return (
    <div>
      <Title id="mainTitle" title="투두리스트"/>
      <Form input={input} setInput={setInput} todoList={todoList} setTodoList={setTodoList}  />
      <Title id="subTitle" title="할 일 목록"/>
      <List todoList={todoList} setTodoList={setTodoList}>
        {(todo) => {todo.title}}
      </List>
    </div>
  );
}

export default App;
