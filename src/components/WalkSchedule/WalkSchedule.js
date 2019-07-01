import React from 'react';

import PropTypes from 'prop-types';

import walkShape from '../../helpers/propz/walkShape';

import walkData from '../../helpers/data/walksData';

import Walk from '../Walk/Walk';

class WalkSchedule extends React.Component {
  state = {
    walks: [],
  }

  static propTypes = {
    walks: PropTypes.arrayOf(walkShape.walkShape),
  }

  componentDidMount() {
    walkData.getWalks()
      .then(walks => this.setState({ walks }))
      .catch(err => console.error('no walkies', err));
  }

  render() {
    const buildWalks = this.state.walks.map(walk => (
      <Walk key={walk.id} walk={walk} />
    ));
    return (
      <div className="WalkSchedule d-flex flex-wrap">
        { buildWalks }
      </div>
    );
  }
}

export default WalkSchedule;
