import * as PropTypes from 'prop-types';
import React, {useMemo, useState} from 'react';
import {useSelector} from 'react-redux';
import {PosterSize} from '../../constants/constant';
import {selectFilmsData} from '../../store/films-data/selectors';
import ReviewForm from '../add-review-form/add-review-form';
import Header from '../header/header';

const AddReview = ({match}) => {
  const {id} = match.params;
  const {films} = useSelector(selectFilmsData);

  const [reviewForm, setReviewForm] = useState({
    rating: ``,
    comment: ``,
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  const handleFieldChange = (evt) => {
    const {name, value} = evt.target;

    setReviewForm({...reviewForm, [name]: value});
  };

  const {name, posterImage, backgroundImage} = useMemo(() => films.find((item) => String(item.id) === id), [id]);

  return (<section className="movie-card movie-card--full">
    <div className="movie-card__header">
      <div className="movie-card__bg">
        <img src={backgroundImage} alt={name}/>
      </div>
      <h1 className="visually-hidden">WTW</h1>

      <Header breadcrumbs={{name, id}}/>

      <div className="movie-card__poster movie-card__poster--small">
        <img src={posterImage} alt={`${name} poster`} width={PosterSize.WIDTH}
          height={PosterSize.HEIGHT}/>
      </div>
    </div>

    <ReviewForm handleSubmit={handleSubmit} handleFieldChange={handleFieldChange} filmId={id}/>
  </section>
  );
};

AddReview.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

export default AddReview;
