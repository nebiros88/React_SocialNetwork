import React from 'react';
import Header from './Header';
import { connect } from "react-redux"
import { setAuthUserData, authorise } from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.authorise();
  }

  render() {
    return (
      <Header {...this.props} />
    )
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
});

export default connect(mapStateToProps, { setAuthUserData, authorise })(HeaderContainer);