import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)

  let messagesElements = state.messages.map(m => <Message message={m.message} />)

  let newMessageBody = state.newMessageText;

  let sendMessage = () => {
    props.addMessageActionCreator();
  }

  let onMessageChange = (e) => {
    let messageBody = e.target.value;
    props.updateNewMessageText(messageBody);
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
            <textarea className={s.textArea}
              onChange={onMessageChange}
              value={newMessageBody}
              placeholder='Enter your message here...'
            ></textarea>
          </div>
          <button className={s.sendBtn} onClick={sendMessage}>Send message</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;