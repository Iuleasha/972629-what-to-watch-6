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

export const LogoLight = PropTypes.bool;

export const HeaderTitleType = PropTypes.string;
export const BreadcrumbsType = PropTypes.shape({
  NAME: PropTypes.string.isRequired,
  ID: PropTypes.string.isRequired,
});

export const HeaderClass = PropTypes.string;
export const OnSelectGenre = PropTypes.func.isRequired;
export const ActiveFilter = PropTypes.string.isRequired;
export const ActiveGenre = PropTypes.string.isRequired;
export const GenresType = PropTypes.arrayOf(PropTypes.string);

export const HandleSubmitType = PropTypes.func.isRequired;
export const HandleFieldChangeType = PropTypes.func.isRequired;

export const CommentType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  user: {id: PropTypes.number.isRequired, name: PropTypes.string.isRequired},
  rating: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
});
export const CommentsType = PropTypes.arrayOf(CommentType);
