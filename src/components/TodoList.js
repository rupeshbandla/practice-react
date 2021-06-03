import React from "react";
import ToDo from "./ToDo";

const TodoList = ({ todoList }) => {
  return (
    <div>
      {todoList.length > 0
        ? todoList.map((todo) => {
            return (
              <ToDo todo={todo} key={todo.id} />
            );
          })
        : "No Data"}
    </div>
  );
};

export default TodoList;
