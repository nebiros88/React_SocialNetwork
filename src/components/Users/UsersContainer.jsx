import React from 'react';
import { connect } from 'react-redux';
import { followActionCreator, unfollowActionCreator, setUsersActionCreator, selectPageActionCreator, setTotalUsersActionCreator } from './../../redux/users-reducer';
import Users from './Users';
import axios from 'axios';

class UsersContainer extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.selectedPage}&count=${this.props.usersPerPage}`)
      .then(response => {
        ;
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChanged = (page) => {
    this.props.changeSelectedPage(page);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.usersPerPage}`)
      .then(response => {
        this.props.setUsers(response.data.items);
      });
  }

  render() {
    return <Users totalUsersCount={this.props.totalUsersCount}
      usersPerPage={this.props.usersPerPage}
      selectedPage={this.props.selectedPage}
      onPageChanged={this.onPageChanged}
      unfollow={this.props.unfollow}
      follow={this.props.follow}
      users={this.props.users} />
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    usersPerPage: state.usersPage.usersPerPage,
    totalUsersCount: state.usersPage.totalUsersCount,
    selectedPage: state.usersPage.selectedPage
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followActionCreator(userId))
    },
    unfollow: (userId) => {
      dispatch(unfollowActionCreator(userId))
    },
    setUsers: (users) => {
      dispatch(setUsersActionCreator(users))
    },
    changeSelectedPage: (pageNumber) => {
      dispatch(selectPageActionCreator(pageNumber))
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setTotalUsersActionCreator(totalCount))
    }
  };
}

export default  connect(mapStateToProps, mapDispatchToProps)(UsersContainer);