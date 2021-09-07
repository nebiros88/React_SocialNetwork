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

export const follow = (userID) => ({ type: FOLLOW, userID });
export const unfollow = (userID) => ({ type: UNFOLLOW, userID });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const changeSelectedPage = (selectedPage) => ({ type: SELECT_PAGE, selectedPage });
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS, totalUsersCount });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleIsFollowing = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING, isFetching, userId });

export default usersReducer;