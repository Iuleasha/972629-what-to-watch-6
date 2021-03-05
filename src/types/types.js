import PropTypes from 'prop-types';

export const FilmType = PropTypes.shape({
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

export const FilmsType = PropTypes.arrayOf(FilmType);

export const MovieCardType = PropTypes.shape({
  TITLE: PropTypes.string.isRequired,
  GENRE: PropTypes.string.isRequired,
  RELEASE_DATE: PropTypes.number.isRequired,
});

export const ReviewType = PropTypes.number.isRequired;

export const LogoLight = PropTypes.bool;

export const HeaderTitleType = PropTypes.string;
export const BreadcrumbsType = PropTypes.shape({
  NAME: PropTypes.string.isRequired,
  ID: PropTypes.string.isRequired,
});

export const HeaderClass = PropTypes.string;
export const OnHover = PropTypes.func.isRequired;

export const HandleSubmitType = PropTypes.func.isRequired;
export const HandleFieldChangeType = PropTypes.func.isRequired;

