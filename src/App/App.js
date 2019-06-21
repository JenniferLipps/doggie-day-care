import React from 'react';

import allDogs from './dogs';

import DogPen from '../components/DogPen/DogPen';

import './App.scss';

class App extends React.Component {
  state = {
    dogs: [],
  }

  componentDidMount() {
    this.setState({ dogs: allDogs });
  }

  render() {
    const { dogs } = this.state;
    return (
      <div className="App">
        <div>Doggie Day Care</div>
        <DogPen dogs={dogs} />
      </div>
    );
  }
}

export default App;
