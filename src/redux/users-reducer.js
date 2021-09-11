import { usersAPI } from '../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SELECT_PAGE = 'SELECT_PAGE';
const SET_TOTAL_USERS = 'SET_TOTAL_USERS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING = 'TOGGLE_IS_FOLLOWING';

let initialState = {
  users: [],
  usersPerPage: 10,
  totalUsersCount: 0,
  selectedPage: 1,
  isFetching: false,
  followInProgress: []
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(user => user.id === action.userID ? { ...user, followed: true } : user)
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => user.id === action.userID ? { ...user, followed: false } : user)
      }
    case SET_USERS:
      return {
        ...state,
        users: [...action.users]
      }
    case SELECT_PAGE:
      return {
        ...state,
        selectedPage: action.selectedPage
      }
    case SET_TOTAL_USERS:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount
      }
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      }
    case TOGGLE_IS_FOLLOWING:
      return {
        ...state,
        followInProgress: action.isFetching 
          ? [...state.followInProgress, action.userId]
          : [...state.followInProgress.filter(id => id != action.userId)]
      }
    default:
      return state;
  }
}

export const followSuccess = (userID) => ({ type: FOLLOW, userID });
export const unfollowSuccess = (userID) => ({ type: UNFOLLOW, userID });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const changeSelectedPage = (selectedPage) => ({ type: SELECT_PAGE, selectedPage });
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS, totalUsersCount });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleIsFollowing = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING, isFetching, userId });

export const getUsers = (selectedPage, usersPerPage) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    usersAPI.getUsers(selectedPage, usersPerPage)
      .then(data => {
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
      });
  }
};

export const unfollow = (userID) => {
  return (dispatch) => {
    dispatch(toggleIsFollowing(true, userID));
    usersAPI.deleteFollow(userID)
      .then(resultCode => {
        if (resultCode === 0) {
          dispatch(unfollowSuccess(userID));
        }
        dispatch(toggleIsFollowing(false, userID));
      });
  }
};

export const follow = (userID) => {
  return (dispatch) => {
    dispatch(toggleIsFollowing(true, userID));
    usersAPI.postFollow(userID)
      .then(resultCode => {
        if (resultCode === 0) {
          dispatch(followSuccess(userID));
        }
        dispatch(toggleIsFollowing(false, userID));
      });
  };
}

export default usersReducer;