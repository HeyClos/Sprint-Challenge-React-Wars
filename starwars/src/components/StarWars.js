import React from "react";

const StarWars = props => {
  console.log(props);
  return (
    <h2
      className={`${props.todo.completed ? "linethrough" : null}`}
      onClick={() => props.toggleComplete(props.todo.id)}
    >
      {props.todo.task}
    </h2>
  );
};

// ternary operator
export default StarWars;
