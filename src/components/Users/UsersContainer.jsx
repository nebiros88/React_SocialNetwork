import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setUsers, changeSelectedPage, setTotalUsersCount, toggleIsFetching, toggleIsFollowing } from './../../redux/users-reducer';
import Users from './Users';
import * as axios from 'axios';
import Preloader from '../common/Preloader/Preloader';
import { usersAPI } from '../../api/api';

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.toggleIsFetching(true);
    usersAPI.getUsers(this.props.selectedPage, this.props.usersPerPage)
      .then(data => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
      });
  }

  onPageChanged = (page) => {
    this.props.changeSelectedPage(page);
    this.props.toggleIsFetching(true)
    usersAPI.getUsers(page, this.props.usersPerPage)
      .then(data => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
      });
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

export default connect(mapStateToProps, { follow, unfollow, setUsers, changeSelectedPage, setTotalUsersCount, toggleIsFetching, toggleIsFollowing })(UsersContainer);