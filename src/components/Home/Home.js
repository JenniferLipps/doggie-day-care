import React from 'react';

import DogPen from '../DogPen/DogPen';
import StaffRoom from '../StaffRoom/StaffRoom';

import './Home.scss';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <div className="row">
          <div className="col">
            <h2>The Dogs</h2>
            <DogPen />
          </div>
          <div className="col">
            <h2>The People</h2>
            <StaffRoom />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
