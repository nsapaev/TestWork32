'use client'
import { useState } from "react"
import style from "./style.module.scss"
 
 
interface IForm {
    title: string
    handlerSubmit: ( username: string, password: string) => void
}

export const Form = ({handlerSubmit, title}:IForm) => {
    const [username, setUsername] = useState<string>("")
    const [pass, setPass] = useState<string>("")
    function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
        setUsername(e.target.value.trim())
    }
    function handlePassChange(e: React.ChangeEvent<HTMLInputElement>) {
        setPass(e.target.value.trim())
    }
    
    return (
    <div className={style.form__container}>
      {title}
    <form className={style.form} 
      onSubmit={(e) => {
            e.preventDefault()
            handlerSubmit(username, pass)
         }} 
    >
      <div className={style['form-group']}>
        <label htmlFor="username">Username</label>
        <input
          value={username} onChange={(e) => handleEmailChange(e)}
          type="text"
          id="username"
          name="username"
          required
          className={style.input}
          minLength={3}
        />
      </div>
      <div className={style['form-group']}>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          value={pass} onChange={(e) => handlePassChange(e)}
          required
          className={style.textarea}
          minLength={3}
        />
      </div>
      <button type="submit" className={style.form__submit_btn}  >
        Submit
      </button>
    </form>
    </div>
  );
}



