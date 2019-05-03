import React from "react";

const StarWars = props => {
  console.log(props);
  return (
    <h2
      className={`${props.starwars.completed ? "linethrough" : null}`}
      onClick={() => props.toggleComplete(props.starwars.id)}
    >
      {props.starwars.name}
    </h2>
  );
};

// ternary operator
export default StarWars;
