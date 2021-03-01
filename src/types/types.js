import PropTypes from 'prop-types';

export const filmType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  posterImage: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  videoLink: PropTypes.string.isRequired,
  previewVideoLink: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  noteDescription: PropTypes.arrayOf(PropTypes.string),
  scoresCount: PropTypes.number.isRequired,
  director: PropTypes.string,
  starring: PropTypes.arrayOf(PropTypes.string),
  runTime: PropTypes.number.isRequired,
  genre: PropTypes.string,
  released: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool,
});

export const filmsType = PropTypes.arrayOf(filmType);

export const movieCardType = PropTypes.shape({
  TITLE: PropTypes.string.isRequired,
  GENRE: PropTypes.string.isRequired,
  RELEASE_DATE: PropTypes.number.isRequired,
});

export const reviewType = PropTypes.number.isRequired;

export const logoLight = PropTypes.bool;

export const headerTitleType = PropTypes.string;
export const breadcrumbsType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
});

export const headerClass = PropTypes.string;
export const onHover = PropTypes.func.isRequired;

export const handleSubmitType = PropTypes.func.isRequired;
export const handleFieldChangeType = PropTypes.func.isRequired;

