import React from 'react';
import Profile from './Profile';
import { setUserProfile, loadProfileInfo } from '../../redux/profile-reducer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {withAuthRedirect} from '../hoc/withAuthRedirect';

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    this.props.loadProfileInfo(userId);
  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} />
    )
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
})

let AuthRedirect = withAuthRedirect(ProfileContainer);
let WithUrlDataContainerComponent = withRouter(AuthRedirect);

export default connect(mapStateToProps, { setUserProfile, loadProfileInfo })(WithUrlDataContainerComponent);