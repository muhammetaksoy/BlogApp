import { LoginType } from "../../Pages/AdminPages/LoginPage/Models/LoginType";
import axios from "axios";
import { Endpoint } from "../Enums/endpoint.enum";

const baseUrl = "http://localhost:5000/";

export async function login(data: LoginType) {
  const response = await axios.post(baseUrl + Endpoint.auth_login, data);
  return response.data;
}
