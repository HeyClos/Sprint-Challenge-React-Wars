import React from "react";
import Todo from "./StarWars";

const StarWarsList = props => {
  console.log(props);
  return (
    <div>
      {props.todos.map(todo => (
        <Todo key={todo.id} todo={todo} toggleComplete={props.toggleComplete} />
      ))}
    </div>
  );
};

export default StarWarsList;