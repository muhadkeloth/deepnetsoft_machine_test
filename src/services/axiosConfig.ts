import axios, { AxiosError } from "axios";
import { Menus } from "../pages/Home";

export interface ErrorResponse { message:string; } 


const api = axios.create({
    baseURL:import.meta.env.VITE_BACKEND,
    headers: {
        'Content-Type':'application/json',
    }
});

export const fetchMenuByCategory = async(menu:string):Promise<{status:number,data:{response:Menus[]}}> => {
    try {
        const response = await api.post('/', {menu});
        if(response.status !== 200) throw new Error('error to fetch menu');
        return response;
    } catch (error) {
        const err = error as AxiosError<ErrorResponse>
        throw new Error(err?.response?.data?.message);
    }
}