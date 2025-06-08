import { error } from "console";
import axios from "axios";

interface ILoginProps  {
  "username": string,
  "email": string,
  "firstName": string,
  "lastName": string,
}


export async function login(username: string, password: string): Promise<ILoginProps> {
    try {
      const response = await axios.post('https://dummyjson.com/auth/login', {
        username,
        password,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
}