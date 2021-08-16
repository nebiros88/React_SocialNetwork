import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';
import { updateNewMessageTextActionCreator, addMessageACtionCreator } from './../../redux/state';

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)

  let messagesElements = props.state.messages.map(m => <Message message={m.message} />)

  let newMessageElement = React.createRef();

  let sendMessage = () => {
    props.dispatch(addMessageACtionCreator());
  }

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    let action = updateNewMessageTextActionCreator(text);
    props.dispatch(action);
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
        <div className={s.newMessageWrapper}>
          <div>
            <textarea className={s.textArea} ref={newMessageElement} onChange={onMessageChange} value={props.state.newMessageText}></textarea>
          </div>
          <button className={s.sendBtn} onClick={sendMessage}>Send message</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;