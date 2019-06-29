import React from 'react';

import DogPen from '../DogPen/DogPen';
import StaffRoom from '../StaffRoom/StaffRoom';

import './Home.scss';
import WalkSchedule from '../WalkSchedule/WalkSchedule';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <div>
          <h2>Schedule a Walk</h2>
          <form>
            <input placeholder="Date"></input>
          </form>
        </div>
        <div className="row">
          <div className="DogPen card-group col">
            <h2>The Dogs</h2>
            <DogPen />
          </div>
          <div className="StaffRoom col">
            <h2>The People</h2>
            <StaffRoom />
          </div>
          <div className="WalkSchedule col">
            <h2>Scheduled Walks</h2>
            <WalkSchedule />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
