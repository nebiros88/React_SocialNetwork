import React from 'react';
import { updateNewMessageTextActionCreator, addMessageActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
  let state = props.state.dialogsPage;

  let sendMessage = () => {
    props.dispatch(addMessageActionCreator());
  }

  let onMessageChange = (body) => {
    props.dispatch(updateNewMessageTextActionCreator(body));
  }

  return (
    <Dialogs updateNewMessageText={onMessageChange} addMessageActionCreator={sendMessage}
    dialogsPage={state}/>
  )
}

export default DialogsContainer;