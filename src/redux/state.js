let store = {
  _state : {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi', likeCounter: 15 },
        { id: 2, message: 'It is is my first post', likeCounter: 10 },
      ],
      newPostText: 'New post text',
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
    }
  },
  getState () {
    return this._state;
  },
  _callSubscriber () {
    console.log('Hi')
  },
  addPost () {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likeCounter: 0
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },
  updateNewPostText (newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  subscribe (observer) {
    this._callSubscriber = observer;
  }
}

export default store;