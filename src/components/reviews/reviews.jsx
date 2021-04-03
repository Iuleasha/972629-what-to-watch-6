import PropTypes from 'prop-types';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchComments} from '../../store/api-actions';
import {formatDate} from '../../utils/utils';

const Reviews = ({filmId}) => {
  const {comments} = useSelector((state) => state.COMMENTS);

  const dispatch = useDispatch();

  const onLoadComments = () => {
    dispatch(fetchComments(filmId));
  };

  let reviewsColLeft = [];
  let reviewsColRight = [];

  if (comments[filmId]) {
    comments[filmId].forEach((item, index) => {
      if ((index + 1) % 2 === 0) {
        reviewsColRight.push(item);
      } else {
        reviewsColLeft.push(item);
      }
    });
  }

  useEffect(() => {
    if (!comments[filmId]) {
      onLoadComments();
    }
  }, [comments[filmId]]);

  return (
    <>
      <div className="movie-card__reviews movie-card__row">
        {(comments[filmId] && !reviewsColLeft.length && !reviewsColRight.length) && <p>No&nbsp;reviews</p>}
        <div className="movie-card__reviews-col">
          {reviewsColLeft.map((item) => (<div className="review" key={`review-id-${item.id}`}>
            <blockquote className="review__quote">
              <p className="review__text">{item.comment}</p>

              <footer className="review__details">
                <cite className="review__author">{item.user.name}</cite>
                <time className="review__date" dateTime={formatDate(item.date, `MMMM D, YYYY`)}>{formatDate(item.date, `MMMM D, YYYY`)}</time>
              </footer>
            </blockquote>

            <div className="review__rating">{item.rating}</div>
          </div>))}
        </div>
        <div className="movie-card__reviews-col">
          {reviewsColRight.map((item) => (<div className="review" key={`review-id-${item.id}`}>
            <blockquote className="review__quote">
              <p className="review__text">{item.comment}</p>

              <footer className="review__details">
                <cite className="review__author">{item.user.name}</cite>
                <time className="review__date" dateTime={formatDate(item.date, `MMMM D, YYYY`)}>{formatDate(item.date, `MMMM D, YYYY`)}</time>
              </footer>
            </blockquote>

            <div className="review__rating">{item.rating}</div>
          </div>))}
        </div>
      </div>
    </>
  );
};

Reviews.propTypes = {
  filmId: PropTypes.number,
};

export default Reviews;
