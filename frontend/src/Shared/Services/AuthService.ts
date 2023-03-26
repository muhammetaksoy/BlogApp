import { LoginType } from './../Models/LoginType';
import axios from "axios";
 
 const baseUrl="http://localhost:5000/users/";

 
 

export async function createUser(data:LoginType) {
  const response = await axios.post(baseUrl+"login", data);
  return response.data;
}