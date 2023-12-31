import { useState } from "react";
import { Input } from "@chakra-ui/react";
import "./Form.css";

const Form = ({ createTodo }) => {
  const [enteredTodo, setEnteredTodo] = useState("");

  const addTodo = (e) => {
    e.preventDefault();

    const newTodo = {
      id: Math.floor(Math.random() * 1e5),
      content: enteredTodo,
    };
    createTodo(newTodo);
    setEnteredTodo("");
  };

  return (
    <div>
      <form onSubmit={addTodo}>
        <Input
          type="text"
          value={enteredTodo}
          onChange={(e) => setEnteredTodo(e.target.value)}
          placeholder="New Todo"
          variant="filled"
        />
      </form>
    </div>
  );
};

export default Form;
