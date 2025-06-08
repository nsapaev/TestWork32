'use client'
import Link from "next/link"
import { useAuthStore } from "@/store/authStore"
import style from "./style.module.scss"

export function Header(){

    const isAuth = useAuthStore((state) => state.isAuth)
    const firstName = useAuthStore((state) => state.firstName)
    const email = useAuthStore((state) => state.email)
    const lastName = useAuthStore((state) => state.lastName)
    const setUser = useAuthStore((state) => state.setUser)

    function logoutHandler(){
        setUser({})
    }

    console.log("isAuth", isAuth, "email", email)

    if(!isAuth){
        return  <div className={style.header}>
            <Link href={"/login"}>Login</Link>
        </div>  
    }

    return (
        <div className={style.header}>
            {`${firstName} ${lastName}`}
            <button onClick={logoutHandler}>Logout</button>
        </div>   
    )
}