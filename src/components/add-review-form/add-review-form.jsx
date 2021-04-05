import * as PropTypes from 'prop-types';
import React, {useCallback, useRef, useState} from 'react';
import {connect} from 'react-redux';
import {useParams} from 'react-router-dom';
import {postComment} from '../../store/api-actions';
import {HandleFieldChangeType, HandleSubmitType} from '../../types/types';

const MIN_COMMENT_LENGTH = 50;
const MAX_COMMENT_LENGTH = 400;
const STARS_LENGTH = 10;
const RATING_DEFAULT_VALUE = 3;
const RATING_STARS = [...Array(STARS_LENGTH).keys()].map((i) => i + 1);

const ReviewForm = ({onSubmitReview}) => {
  const {id} = useParams();

  const [isFormValid, setFormValid] = useState(false);
  const [rating, setRating] = useState(RATING_DEFAULT_VALUE);

  const handleFieldChange = useCallback((evt) => {

    setRating(Number(evt.target.value));
  }, [setRating]);

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

  const handleChange = useCallback(() => {
    setFormValid(formRef.current.checkValidity());
  }, [isFormValid]);

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

ReviewForm.propTypes = {
  onSubmitReview: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onSubmitReview(post) {
    dispatch(postComment(post));
  },
});

ReviewForm.propTypes = {handleSubmit: HandleSubmitType, handleFieldChange: HandleFieldChangeType};

export {ReviewForm};
export default connect(null, mapDispatchToProps)(ReviewForm);
