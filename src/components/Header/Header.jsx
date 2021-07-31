import React from 'react';
import s from './Header.module.css';

const Header = () => {
  return <header className={s.header}>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmb4eyN5N-_-dwIEAhsDljYbUda7ZbdsvFbQ&usqp=CAU' alt='headerLogo'></img>
  </header>
}

export default Header;