import React from 'react';

import Employee from '../Employee/Employee';

import './StaffRoom.scss';

class StaffRoom extends React.Component {
  render() {
    const employees = this.props;
    const buildEmployees = employees.map(employee => (
      <Employee key={employee.id} employee={employee} />
    ));
    return (
      <div>
        { buildEmployees }
      </div>
    );
  }
}

export default StaffRoom;
