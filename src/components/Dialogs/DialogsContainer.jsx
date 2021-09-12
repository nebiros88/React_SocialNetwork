import React from 'react';
import { updateNewMessageTextActionCreator, addMessageActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {withAuthRedirect} from '../hoc/withAuthRedirect';

let AuthRedirect = withAuthRedirect(Dialogs);

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageText: (body) => {
      dispatch(updateNewMessageTextActionCreator(body));
    },
    addMessageActionCreator: () => {
      dispatch(addMessageActionCreator());
    }
  }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirect);

export default DialogsContainer;