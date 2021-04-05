import * as PropTypes from 'prop-types';
import React, {useRef} from 'react';
import {connect} from 'react-redux';
import {login} from '../../store/api-actions';
import Footer from '../footer/footer';
import {Header} from '../header/header';

const SignIn = ({onSubmit}) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSubmit({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
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
              id="user-email"/>
            <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
          </div>
          <div className="sign-in__field">
            <input ref={passwordRef} className="sign-in__input" type="password" placeholder="Password"
              name="user-password"
              id="user-password"/>
            <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
          </div>
        </div>
        <div className="sign-in__submit">
          <button className="sign-in__btn" type="submit">Sign in</button>
        </div>
      </form>
    </div>
    <Footer/>
  </div>
  );
};

SignIn.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  },
});

export {SignIn};
export default connect(null, mapDispatchToProps)(SignIn);
