'use client'
import { Form } from "@/app/components/Form"
import styles from "./styles.module.scss"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useAuthStore } from "@/app/store/authStore"
import { useUserStore } from "@/app/store/userStore"
import { User } from "@/app/types"



export default function Login() {
    const {push} = useRouter()
    const setTokens = useAuthStore(state => state.setTokens)
    const setUser = useUserStore(state => state.setUser)

    async function submitHandler(username: string, password: string ){

      try{
            const res = await axios.post('https://dummyJson.com/auth/login', {
                username,
                password,
                expiresInMins: 15, 
            })
            
            if(res.status === 200){
                setTokens(res.data.accessToken, res.data.refreshToken)

                const meResponse = await axios.get<User>('https://dummyjson.com/auth/me',{
                    headers: {
                        Authorization: `Bearer ${res.data.accessToken}`
                    }
                })

                const data = meResponse.data
                
                setUser({
                    email: data.email,
                    firstName: data.firstName,
                    id: data.id,
                    lastName: data.lastName 
                })
            }
            push("/")
            
        }catch(err){
            if(err instanceof Error){
                alert(err.message)
            }
        }

    }
   

    return (
        <div className={styles.wrapper}> 
         <Form handlerSubmit={submitHandler} title="Login" />
        </div>
    )
}