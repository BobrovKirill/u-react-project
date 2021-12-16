import React from 'react';
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';
import { useContext } from 'react';
import { AuthContext } from '../context';

export default function Login() {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const login = (e) => {
    e.preventDefault();
		setIsAuth(true)
		localStorage.setItem('auth', 'true')
  };
  return (
    <div>
      <h1>Страница для логина</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="login" />
        <MyInput type="password" placeholder="password" />
        <MyButton>Войти</MyButton>
      </form>
    </div>
  );
}
