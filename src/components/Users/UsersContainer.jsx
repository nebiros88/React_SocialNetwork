import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setUsers, changeSelectedPage, toggleIsFollowing, getUsers } from './../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import {withAuthRedirect} from '../hoc/withAuthRedirect';
import { compose } from 'redux';

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.getUsers(this.props.selectedPage, this.props.usersPerPage);
  }

  onPageChanged = (page) => {
    this.props.changeSelectedPage(page);
    this.props.getUsers(page, this.props.usersPerPage);
  }

  render() {
    return (
      <>
        {this.props.isFetching
          ? <Preloader />
          : <Users totalUsersCount={this.props.totalUsersCount}
            usersPerPage={this.props.usersPerPage}
            selectedPage={this.props.selectedPage}
            onPageChanged={this.onPageChanged}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            users={this.props.users}
            followInProgress={this.props.followInProgress}
            toggleIsFollowing={this.props.toggleIsFollowing}
          />}
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    usersPerPage: state.usersPage.usersPerPage,
    totalUsersCount: state.usersPage.totalUsersCount,
    selectedPage: state.usersPage.selectedPage,
    isFetching: state.usersPage.isFetching,
    followInProgress: state.usersPage.followInProgress,
  };
}

export default compose(
  connect(mapStateToProps, { follow, unfollow, changeSelectedPage, toggleIsFollowing, getUsers }),
  withAuthRedirect
)(UsersContainer)