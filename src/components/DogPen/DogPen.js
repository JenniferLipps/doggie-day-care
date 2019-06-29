import React from 'react';

import PropTypes from 'prop-types';

import dogData from '../../helpers/data/dogsData';

import dogShape from '../../helpers/propz/dogShape';

import Dog from '../Dog/Dog';

import './DogPen.scss';

class DogPen extends React.Component {
  static propTypes = {
    dogs: PropTypes.arrayOf(dogShape.dogShape),
  }

  state = {
    dogs: [],
  }

  componentDidMount() {
    dogData.getDogs()
      .then(dogs => this.setState({ dogs }))
      .catch(err => console.error('no dogs', err));
  }


  render() {
    // const { dogs } = this.props;
    const buildDogs = this.state.dogs.map(dog => (
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
