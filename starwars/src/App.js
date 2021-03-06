import React, { Component } from 'react';
import './App.css';
import StarWarsList from "./components/StarWarsList";

import './components/StarWars.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };
//toggleComplete and clear Complete are experimental. Cant get em working yet.
  toggleComplete = id => {
    this.setState({
      starwarsChars: this.state.starwarsChars.map(item => {
        if (id === item.id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    });
  };

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      todos: this.state.starwarsChars.filter(item => {
        return !item.completed;
      })
    });
  };


  render() {
    return (

      <div className="App">
        <h1 className="Header">React Wars</h1>
        <StarWarsList className="starWarsList" starwarsChars={this.state.starwarsChars} toggleComplete={this.toggleComplete} />
        
      </div>
    );
  }
}

export default App;
