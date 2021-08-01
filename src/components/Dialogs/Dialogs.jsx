import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
  let path = '/dialogs/' + props.id;
  return (
    <div className={s.dialog + ' ' + s.active}>
      <NavLink to={path}> {props.name} </NavLink>
    </div>
  )
}

const Message = (props) => {
  return (
    <div className={s.dialog}>{props.message}</div>
  )
}

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name='Sergey' id='1'/>
        <DialogItem name='Svetlana' id='2'/>
        <DialogItem name='Hleb' id='3'/>
      </div>
      <div className={s.messages}>
        <Message message='Hi'/>
        <Message message='How ae you?'/>
        <Message message='Bla'/>
      </div>
    </div>
  )
}

export default Dialogs;