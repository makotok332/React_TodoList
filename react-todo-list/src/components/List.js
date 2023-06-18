import { useState } from "react";

const List = ({ todos, deleteTodo }) => {
  const complete = (id) => {
    deleteTodo(id);
  };

  const [filterVal, setFilterVal] = useState("");

  return (
    <div>
      <input
        type="text"
        value={filterVal}
        onChange={(e) => setFilterVal(e.target.value)}
        placeholder="Search Keyword"
      />
      {todos
        .filter((todo) => todo.content.indexOf(filterVal) !== -1)
        .map((todo) => {
          return (
            <div key={todo.id}>
              <span>{todo.content}</span>
              <button onClick={() => complete(todo.id)}>完了</button>
            </div>
          );
        })}
    </div>
  );
};

export default List;
