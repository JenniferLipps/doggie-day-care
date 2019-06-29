import PropTypes from 'prop-types';

const dogShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
  bestFeature: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  loudness: PropTypes.number.isRequired,
  goodDog: PropTypes.number.isRequired,
});

export default { dogShape };
