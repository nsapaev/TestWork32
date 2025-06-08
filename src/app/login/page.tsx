'use client';
import { useRouter } from 'next/navigation';
import style from './style.module.scss';
import { Form } from '../../components/Form';
import React from 'react';
import { login } from '../../api/login';
import { useAuthStore } from '../../store/authStore';

const Login = () => {
  const { push } = useRouter();
  const setUser = useAuthStore((state) => state.setUser);
  // const {firstName, lastName} = useAuthStore((state) => state)
  //'emilys'
  //'emilyspass'
  async function handleSubmit(username: string, password: string) {
    login(username, password)
      .then((data) => {
        setUser({
          username: data.username,
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
        });
        console.log(data);
        push('/');
      })
      .catch((err) => {
        console.log(err);
        alert(`${err.message}`);
      });
  }

  return (
    <div className={style.wrapper}>
      <Form handlerSubmit={handleSubmit} title="Login" />
    </div>
  );
};

export default Login;
