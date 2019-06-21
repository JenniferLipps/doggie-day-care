import React from 'react';

import Dog from '../Dog/Dog';

import './DogPen.scss';

class DogPen extends React.Component {
  render() {
    const { dogs } = this.props;
    const buildDogs = dogs.map(dog => (
      <Dog key={dog.id} dog={dog} />
    ));
    return (
      <div className="DogPen d-flex flex-wrap">
        { buildDogs }
      </div>
    );
  }
}

export default DogPen;
