'use client'
import Link from "next/link"
import { useAuthStore } from "@/app/store/authStore"
import { useUserStore } from "@/app/store/userStore"
import style from "./style.module.scss"
import { logout } from "./helpers"

export function Header(){
    const isAuth = useAuthStore((state) => state.isAuth())
    const user = useUserStore((state) => state.user)
    
    const firstName = user?.firstName ?? ''
    const lastName = user?.lastName ?? '' 

    function logoutHandler(){
        logout()
    }

    if(!isAuth){
        return  <div className={style.header}>
            <Link href={"/auth/login"}>Login</Link>
        </div>  
    }

    return (
        <div className={style.header}>
            {`${firstName} ${lastName}`}
            <button onClick={logoutHandler}>Logout</button>
        </div>   
    )
}