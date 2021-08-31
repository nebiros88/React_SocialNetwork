import React from 'react';
import preloader from '../../../assets/img/Spinner-2.gif';
import style from './Preloader.module.css';

let Preloader = (props) => {
  return (
    <div className={style.preloaderWrapper}>
      <img src={preloader}></img>
    </div>
  )
}

export default Preloader;