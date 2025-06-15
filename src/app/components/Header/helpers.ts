
import { useAuthStore } from '@/app/store/authStore'
import { useUserStore } from '@/app/store/userStore'

export const logout = () => {
    useAuthStore.getState().clearTokens()
    useUserStore.getState().clearUser() 
}
