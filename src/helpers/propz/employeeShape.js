import PropTypes from 'prop-types';

const employeeShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  experience: PropTypes.string.isRequired,
  strength: PropTypes.string.isRequired,
});

export default { employeeShape };
