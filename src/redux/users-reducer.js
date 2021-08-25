const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
  users: [
    {
      id: 1, name: 'Sergey', surName: 'Sergeev',
      photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ50PAJhgujPKk4EbIEREGx9uiPu2UOoiruJg&usqp=CAU',
      location: { country: 'Belarus', city: 'Minsk' },
      status: 'the great user',
      followed: true
    },
    {
      id: 2, name: 'Ivan', surName: 'Ivanov',
      photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ50PAJhgujPKk4EbIEREGx9uiPu2UOoiruJg&usqp=CAU',
      location: { country: 'Belarus', city: 'Gomel' },
      status: 'the great user too',
      followed: false
    }
  ]
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
        users: [...state.users, ...action.users]
      }
    default:
      return state;
  }
}

export const followActionCreator = (userID) => ({ type: FOLLOW, userID });
export const unfollowActionCreator = (userID) => ({ type: UNFOLLOW, userID });
export const setUsersActionCreator = (users) => ({ type: SET_USERS, users });

export default usersReducer;