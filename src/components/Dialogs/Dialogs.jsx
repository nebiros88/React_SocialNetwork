import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';
import { Redirect } from 'react-router';

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />)

  let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id}/>)

  let newMessageBody = props.dialogsPage.newMessageText;

  let sendMessage = () => {
    props.addMessageActionCreator();
  }

  let onMessageChange = (e) => {
    let messageBody = e.target.value;
    props.updateNewMessageText(messageBody);
  }

  if(!props.isAuth) return <Redirect to='/login' />

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