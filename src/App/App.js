import React from 'react';
import firebase from 'firebase/app';
import Home from '../components/Home/Home';
import Auth from '../components/Auth/Auth';
import MyNavBar from '../components/MyNavBar/MyNavBar';
// import DogPen from '../components/DogPen/DogPen';
// import StaffRoom from '../components/StaffRoom/StaffRoom';
import fbConnection from '../helpers/data/connection';

// import allDogs from './dogs';
// import allEmployees from './employees';

import './App.scss';

fbConnection();

class App extends React.Component {
  state = {
    // dogs: [],
    // employees: [],
    authed: false,
  }

  componentDidMount() {
    // this.setState({ dogs: allDogs, employees: allEmployees });
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;
    const loadComponent = () => {
      if (authed) {
        return <Home />;
      }
      return <Auth />;
    };

    return (
      <div className="App">
        <MyNavBar authed={authed} />
        {loadComponent()}
        {/* <div className="heading">Doggie Day Care</div>
        <DogPen dogs={dogs} />
        <div className="heading">Dog Caregivers</div>
        <StaffRoom employees={employees} /> */}
      </div>
    );
  }
}

export default App;
