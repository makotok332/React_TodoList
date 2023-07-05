import { useState } from "react";
import List from "./List";
import Form from "./Form";
import "./Todo.css";
import { VStack } from "@chakra-ui/react";

const Todo = () => {
  const todosList = [
    {
      id: 1,
      content: "家を買う",
    },
    {
      id: 2,
      content: "明日やる",
    },
    {
      id: 3,
      content: "早く寝る",
    },
  ];

  const [todos, setTodos] = useState(todosList);

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  };

  const createTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <div className="wrapper">
      <VStack>
        <h1 className="title">Todo List</h1>
        <Form createTodo={createTodo} />
        <List todos={todos} deleteTodo={deleteTodo} />
      </VStack>
    </div>
  );
};

export default Todo;
