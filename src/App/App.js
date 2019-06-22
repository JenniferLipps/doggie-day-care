import React from 'react';

import allDogs from './dogs';

import allEmployees from './employees';

import DogPen from '../components/DogPen/DogPen';

import StaffRoom from '../components/StaffRoom/StaffRoom';

import './App.scss';

class App extends React.Component {
  state = {
    dogs: [],
    employees: [],
  }

  componentDidMount() {
    this.setState({ dogs: allDogs, employees: allEmployees });
  }

  render() {
    const { dogs, employees } = this.state;
    return (
      <div className="App">
        <div>Doggie Day Care</div>
        <DogPen dogs={dogs} />
        <div>Dog Caregivers</div>
        <StaffRoom employees={employees} />
      </div>
    );
  }
}

export default App;
