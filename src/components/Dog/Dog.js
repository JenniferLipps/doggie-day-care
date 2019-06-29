import React from 'react';
// import PropTypes from 'prop-types';
import dogShape from '../../helpers/propz/dogShape';

import './Dog.scss';

class Dog extends React.Component {
  static propTypes = {
    dog: dogShape.dogShape,
  }

  render() {
    const { dog } = this.props;
    return (
      // <div className="card-deck Dog col-3">
      <div className ="card" id="dogCard">
        <img src={dog.imageUrl} className="card-img-top" alt="{dog.name}"/>
        <div className="card-body">
          <h2>{dog.name}</h2>
          <h4>{dog.breed}</h4>
          <p>Best feature: {dog.bestFeature}</p>
          <p>Loudness: {dog.loudness}/10</p>
          <p>Good Dog: {dog.goodDog}/10</p>
        </div>
      </div>
      // </div>
    );
  }
}

export default Dog;
