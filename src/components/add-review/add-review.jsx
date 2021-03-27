import React, {useState} from 'react';
import {connect} from 'react-redux';
import {useParams} from 'react-router-dom';
import {FilmsType} from '../../types/types';
import {PosterSize} from '../../utils/constant/constant';
import ReviewForm from '../add-review-form/add-review-form';
import Header from '../header/header';

const AddReview = ({films}) => {
  const {id} = useParams();

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

  const {name, posterImage, backgroundImage} = films.find((item) => String(item.id) === id);

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

    <ReviewForm handleSubmit={handleSubmit} handleFieldChange={handleFieldChange}/>
  </section>
  );
};

AddReview.propTypes = {films: FilmsType};

const mapStateToProps = (state) => ({
  films: state.films,
});

export {AddReview};
export default connect(mapStateToProps)(AddReview);
