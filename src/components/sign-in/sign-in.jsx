import React, {useRef, useState} from 'react';
import {useDispatch} from 'react-redux';
import {login} from '../../store/api-actions';
import Footer from '../footer/footer';
import Header from '../header/header';

const SignIn = () => {
  const dispatch = useDispatch();

  const emailRef = useRef();
  const passwordRef = useRef();

  const [showError, setShowError] = useState(false);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    setShowError(false);

    dispatch(login({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }, onAddReviewError));
  };

  const onAddReviewError = () => {
    setShowError(true);
  };

  return (<div className="user-page">
    <Header title={`Sign in`} type={`user-page__head`} showUserBlock={false}/>

    <div className="sign-in user-page__content">
      <form action="#" className="sign-in__form" onSubmit={handleSubmit}
      >
        <div className="sign-in__fields">
          <div className="sign-in__field">
            <input ref={emailRef} className="sign-in__input" type="email" placeholder="Email address"
              name="user-email"
              id="user-email"
              required
              data-testid="email"/>
            <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
          </div>
          <div className="sign-in__field">
            <input ref={passwordRef} className="sign-in__input" type="password" placeholder="Password"
              name="user-password"
              id="user-password"
              required
              data-testid="password"/>
            <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
          </div>
        </div>
        <div className="sign-in__submit">
          <button className="sign-in__btn" type="submit">Sign in</button>
        </div>
        {showError && <h3 className="error-message">Error. Try sign in later.</h3>}
      </form>
    </div>
    <Footer/>
  </div>
  );
};

export default SignIn;
