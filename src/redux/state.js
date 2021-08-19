import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi', likeCounter: 15 },
        { id: 2, message: 'It is is my first post', likeCounter: 10 },
      ],
      newPostText: '',
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Sergey' },
        { id: 2, name: 'Svetlana' },
        { id: 3, name: 'Hleb' }
      ],
      messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Bla' }
      ],
      newMessageText: '',
    },
    sidebar: {}
  },
  _callSubscriber() {
    console.log('Hi')
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  }
}

export default store;