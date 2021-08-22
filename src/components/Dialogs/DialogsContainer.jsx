import React from 'react';
import { updateNewMessageTextActionCreator, addMessageActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';

const DialogsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {
        (store) => {
          let state = store.getState().dialogsPage;
          let sendMessage = () => {
            store.dispatch(addMessageActionCreator());
          }
          let onMessageChange = (body) => {
            store.dispatch(updateNewMessageTextActionCreator(body));
          }
          return (
            <Dialogs updateNewMessageText={onMessageChange} addMessageActionCreator={sendMessage}
              dialogsPage={state} />
          )
        }}
    </StoreContext.Consumer>
  )
}

export default DialogsContainer;