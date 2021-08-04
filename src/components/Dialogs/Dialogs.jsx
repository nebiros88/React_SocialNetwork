import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';

const Dialogs = (props) => {
  let dialogs = [
    { id: 1, name: 'Sergey' },
    { id: 2, name: 'Svetlana' },
    { id: 3, name: 'Hleb' }
  ];

  let messages = [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: 'Bla' }
  ];

  let dialogsElements = dialogs
    .map(d => <DialogItem name={d.name} id={d.id} />)

  let messagesElements = messages
    .map(m => <Message message={m.message} />)

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
      </div>
    </div>
  )
}

export default Dialogs;