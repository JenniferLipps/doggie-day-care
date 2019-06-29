import React from 'react';

class Walk extends React.Component {
  render() {
    const { walk } = this.props;
    return (
      <div className="card-columns walk">
      <div className="card" id="walkCard">
        <h3>Dog: ${walk.dogId}</h3>
        <h3>Caregiver: ${walk.employeeId}</h3>
        <h3>Date: ${walk.date}</h3>
      </div>
      </div>
    );
  }
}

export default Walk;
