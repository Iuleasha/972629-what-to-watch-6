import React from 'react';
import {HandleSubmitType, HandleFieldChangeType} from '../../types/types';

const MIN_COMMENT_LENGTH = 50;
const MAX_COMMENT_LENGTH = 400;
const STARS_LENGTH = 10;
const RATING_DEFAULT_VALUE = 3;
const RATING_STARS = [...Array(STARS_LENGTH).keys()].map((i) => i + 1);

const ReviewForm = ({handleSubmit, handleFieldChange}) => {
  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={handleSubmit}>
        <div className="rating">
          <div className="rating__stars">
            {RATING_STARS.map((item) => <React.Fragment key={`rating-star-${item}`}>
              <input className="rating__input" id={`star-${item}`} type="radio" name="rating" defaultValue={item}
                defaultChecked={item === RATING_DEFAULT_VALUE} onChange={handleFieldChange}/>
              <label className="rating__label" htmlFor={`star-${item}`}>Rating {item}</label>
            </React.Fragment>)}
          </div>
        </div>
        <div className="add-review__text">
          <textarea className="add-review__textarea" name="comment" id="review-text" placeholder="Review text"
            defaultValue={``} onChange={handleFieldChange} maxLength={MAX_COMMENT_LENGTH}
            minLength={MIN_COMMENT_LENGTH}/>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>
        </div>
      </form>
    </div>
  );
};

ReviewForm.propTypes = {handleSubmit: HandleSubmitType, handleFieldChange: HandleFieldChangeType};

export default ReviewForm;
