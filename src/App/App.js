import React from 'react';

import dogs from './dogs';

import './App.scss';

class App extends React.Component {
  state = {
    dogs: [],
  }

  componentDidMount() {
    this.setState({ dogs });
  }

  render() {
    return (
      <div className="App">
        <div>Doggie Day Care</div>
        {/* { <DogPen dogs={dogs} />} */}
      </div>
    );
  }
}

export default App;
