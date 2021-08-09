import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)

  let messagesElements = props.state.messages.map(m => <Message message={m.message} />)

  let newMessageElement = React.createRef();

  let sendMessage = () => {
    let text =newMessageElement.current.value;
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
            <textarea className={s.textArea} ref={newMessageElement} ></textarea>
          </div>
          <button className={s.sendBtn} onClick={sendMessage}>Send message</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;