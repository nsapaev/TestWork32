'use client'
import { useState } from "react"
import style from "./style.module.scss"
import { useAuthStore } from "@/app/store/authStore"
import { useUserStore } from "@/app/store/userStore"

export const Footer = () => {
    const isAuth = useAuthStore(state => state.isAuth())
    const email = useUserStore(state => state.user?.email ?? "")

    if(isAuth){
        return  <div className={style.footer}> {`${new Date().getFullYear()} Logged as ${email}`} </div>
    }
    return(
        <div className={style.footer} >
            {new Date().getFullYear()} 
        </div>
    ) 
}