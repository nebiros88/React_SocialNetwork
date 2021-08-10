import {rerenderEntireTree} from './../render.js';

let state = {
  profilePage: {
    posts: [
      { id: 1, message: 'Hi', likeCounter: 15 },
      { id: 2, message: 'It is is my first post', likeCounter: 10 },
    ],
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

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
    likeCounter: 0
  };

  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
}

export default state;