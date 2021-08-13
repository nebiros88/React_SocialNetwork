let rerenderEntireTree = () => {

}

let state = {
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
}

export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likeCounter: 0
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
}

export default state;