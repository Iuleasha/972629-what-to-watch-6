import React from 'react';
import reviews from '../../mocks/reviews';
import {ReviewType} from '../../types/types';
import {formatDate} from '../../utils/utils';

const Reviews = () => {
  let reviewsColLeft = [];
  let reviewsColRight = [];

  reviews.forEach((item, index) => {
    if ((index + 1) % 2 === 0) {
      reviewsColRight.push(item);
    } else {
      reviewsColLeft.push(item);
    }
  });

  return (
    <>
      <div className="movie-card__reviews movie-card__row">
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

Reviews.propTypes = {filmId: ReviewType};

export default Reviews;
