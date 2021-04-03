import React, {useCallback, useRef, useState} from 'react';
import {useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';
import {postComment} from '../../store/api-actions';

const MIN_COMMENT_LENGTH = 50;
const MAX_COMMENT_LENGTH = 400;
const STARS_LENGTH = 10;
const RATING_DEFAULT_VALUE = 3;
const RATING_STARS = [...Array(STARS_LENGTH).keys()].map((i) => i + 1);

const ReviewForm = () => {
  const {id} = useParams();
  const dispatch = useDispatch();

  const [isFormValid, setFormValid] = useState(false);
  const [rating, setRating] = useState(RATING_DEFAULT_VALUE);

  const handleFieldChange = (evt) => {
    setRating(Number(evt.target.value));
  };

  const textRef = useRef();
  const formRef = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSubmitReview({
      id, post: {
        rating,
        comment: textRef.current.value,
      },
    });
  };

  const onSubmitReview = (post) => {
    dispatch(postComment(post));
  };

  const handleChange = () => {
    setFormValid(formRef.current.checkValidity());
  };

  return (
    <div className="add-review">
      <form ref={formRef} action="#" className="add-review__form" onSubmit={handleSubmit} onChange={handleChange}>
        <div className="rating">
          <div className="rating__stars">
            {RATING_STARS.map((item) => <React.Fragment key={`rating-star-${item}`}>
              <input className="rating__input" id={`star-${item}`} type="radio" name="rating" defaultValue={item}
                defaultChecked={item === RATING_DEFAULT_VALUE} onChange={handleFieldChange} required/>
              <label className="rating__label" htmlFor={`star-${item}`}>Rating {item}</label>
            </React.Fragment>)}
          </div>
        </div>
        <div className="add-review__text">
          <textarea ref={textRef} className="add-review__textarea" name="comment" id="review-text"
            placeholder="Review text"
            defaultValue={``} maxLength={MAX_COMMENT_LENGTH}
            minLength={MIN_COMMENT_LENGTH} required/>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit" disabled={!isFormValid}>Post</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
