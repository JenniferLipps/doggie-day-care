import React from 'react';

import './DogPen.scss';

class DogPen extends React.Component {
  render() {
    const { dogs } = this.props;
    const buildDogs = dogs.map(dog => (
      <h2>{dog.name}</h2>
    ));
    return (
      <div>
        { buildDogs }
      </div>
    );
  }
}

export default DogPen;
