import { profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
  posts: [
    { id: 1, message: 'Hi', likeCounter: 15 },
    { id: 2, message: 'It is is my first post', likeCounter: 10 },
  ],
  newPostText: '',
  profile: null
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let body = state.newPostText;
      return {
        ...state,
        newPostText: '',
        posts: [...state.posts, { id: 5, message: body, likeCounter: 0 }]
      }
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText
      }
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile }
    default:
      return state;
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

export const loadProfileInfo = (userID) => {
  return (dispatch) => {
    profileAPI.getProfile(userID)
      .then(response => {
        dispatch(setUserProfile(response.data));
      });
  }
}

export default profileReducer;