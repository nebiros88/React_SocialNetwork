import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
  return <header className={s.header}>
    <img className={s.logo} src="https://img2.freepng.ru/20180320/cww/kisspng-area-monochrome-photography-circle-black-users-5ab0b61ebedaa2.9384003615215303987818.jpg"></img>
    <div className={s.loginBlock}>
      {props.isAuth 
       ? props.login
       : <NavLink to={'/login'}>Login</NavLink>
      }
    </div>
  </header>
}

export default Header;