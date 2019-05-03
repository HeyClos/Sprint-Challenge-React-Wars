import React from "react";
import StarWars from "./StarWars";
// We are already getting data through the api, just render it here using this.
// Do I pass the api's info here or do i pass this component's info back to my app.js?
// or Both?

const StarWarsList = props => {
  console.log(props);
  return (
    <div>
      {props.starwarsChars.map(starwars => (
        <StarWars key={starwars.id} starwars={starwars} toggleComplete={props.toggleComplete} />
      ))}
    </div>
  );
};

export default StarWarsList;