import React from 'react';
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [swCharacters, setSwCharacters] = useState(null);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  
  useEffect( () => {
    axios.get("https://swapi.co/api/people") // DO I NEED :id HERE?!?!
    .then( result => {
      console.log(result)
      setSwCharacters(result.data)
     })
    .catch( error => {
      console.log(error)
    })
  },[])


  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
    </div>
  );
}

export default App;
