import React from 'react';
import { Card } from 'semantic-ui-react'

const StarWarsCard = (props) => (
  <Card>
    <Card.Content>
      <Card.Header>{props.name}</Card.Header>
      <Card.Meta>
        <span className='date'>{props.gender}</span>
      </Card.Meta>
      <Card.Description>
      <p>Birth year:</p>{props.birth_year}
      </Card.Description>
    </Card.Content>
  </Card>
)

export default StarWarsCard;

// export const StarWarsCard = (props) => {
  
//     return (
//       <div>
//          {props.name}
//          {props.gender}
//          {props.birth_year}
//       </div>
      // bring semantic ui see TK: Thursday see 
      // import different parts 
  //   );
  // };
  