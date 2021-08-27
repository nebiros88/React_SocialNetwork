const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SELECT_PAGE = 'SELECT_PAGE';
const SET_TOTAL_USERS = 'SET_TOTAL_USERS';

let initialState = {
  users: [],
  usersPerPage: 10,
  totalUsersCount: 0,
  selectedPage: 1
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
    default:
      return state;
  }
}

export const followActionCreator = (userID) => ({ type: FOLLOW, userID });
export const unfollowActionCreator = (userID) => ({ type: UNFOLLOW, userID });
export const setUsersActionCreator = (users) => ({ type: SET_USERS, users });
export const selectPageActionCreator = (selectedPage) => ({ type: SELECT_PAGE, selectedPage });
export const setTotalUsersActionCreator = (totalUsersCount) => ({ type: SET_TOTAL_USERS, totalUsersCount });

export default usersReducer;