import * as PropTypes from 'prop-types';
import React, {useCallback, useRef, useState} from 'react';
import {useDispatch} from 'react-redux';
import {postComment} from '../../store/api-actions';

const MIN_COMMENT_LENGTH = 50;
const MAX_COMMENT_LENGTH = 400;
const STARS_LENGTH = 10;
const RATING_DEFAULT_VALUE = 3;
const RATING_STARS = [...Array(STARS_LENGTH).keys()].map((i) => i + 1);

const ReviewForm = ({filmId}) => {
  const dispatch = useDispatch();

  const [isFormValid, setFormValid] = useState(false);
  const [rating, setRating] = useState(RATING_DEFAULT_VALUE);

  const [showError, setShowError] = useState(false);
  const [disableForm, setDisableForm] = useState(false);

  const handleFieldChange = useCallback((evt) => {
    setRating(Number(evt.target.value));
  }, [setRating]);

  const handleAddReviewError = useCallback(() => {
    setShowError(true);
    setDisableForm(false);
  }, [disableForm, showError]);

  const handleChange = useCallback(() => {
    setFormValid(formRef.current.checkValidity());
  }, [isFormValid]);

  const textRef = useRef();
  const formRef = useRef();

  const handleSubmit = useCallback((evt) => {
    evt.preventDefault();

    if (!disableForm) {
      setDisableForm(true);
      setShowError(false);

      dispatch(postComment({
        id: filmId,
        post: {
          rating,
          comment: textRef.current.value,
        },
      }, handleAddReviewError));
    }
  }, []);

  return (
    <div className="add-review">
      <form ref={formRef} action="#" className="add-review__form" onSubmit={handleSubmit} onChange={handleChange}>
        <div className="rating">
          <div className="rating__stars">
            {RATING_STARS.map((item) => <React.Fragment key={`rating-star-${item}`}>
              <input className="rating__input" id={`star-${item}`} type="radio" name="rating" defaultValue={item}
                defaultChecked={item === RATING_DEFAULT_VALUE} onChange={handleFieldChange} required
                disabled={disableForm}/>
              <label className="rating__label" htmlFor={`star-${item}`}>Rating {item}</label>
            </React.Fragment>)}
          </div>
        </div>
        <div className="add-review__text">
          <textarea ref={textRef} className="add-review__textarea" name="comment" id="review-text"
            placeholder="Review text"
            defaultValue={``} maxLength={MAX_COMMENT_LENGTH}
            minLength={MIN_COMMENT_LENGTH} required disabled={disableForm}/>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit" disabled={!isFormValid || disableForm}>Post</button>
          </div>
        </div>
        {showError && <h3 className="error-message">Error. Try send review letter.</h3>}
      </form>
    </div>
  );
};

ReviewForm.propTypes = {
  filmId: PropTypes.string,
};

export default ReviewForm;
