'use client'
import style from "./style.module.scss"
import { useAuthStore } from "@/store/authStore"

export const Footer = () => {
    const {email, isAuth} = useAuthStore((state) => state)
    if(isAuth){
        return  <div className={style.footer}> {`${new Date().getFullYear()} Logged as ${email}`} </div>
    }

    return(
        <div className={style.footer} >
            {new Date().getFullYear()} 
        </div>
    ) 
}