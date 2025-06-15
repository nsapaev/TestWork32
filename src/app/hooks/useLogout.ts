
import { useAuthStore } from '../store/authStore'
import { useUserStore } from '../store/userStore'
import { useRouter } from 'next/navigation'

export const useLogout = () => {
  const router = useRouter()

  const logout = () => {
    useAuthStore.getState().clearTokens()
    useUserStore.getState().clearUser()
  }

  return logout
}
