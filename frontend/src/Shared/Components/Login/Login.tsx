import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginType } from "../../Models/LoginType";
import { createUser } from "../../Services/AuthService";

const Login = () => {
  const [user, setUser] = useState<Object>();
  const navigate = useNavigate();

  const LoginUser = () => {
    const model: LoginType = {
      email: "muhammet@gmail.com",
      password: "muhammet123",
    };
    createUser(model)
      .then((response) => {
        setUser(response);        
        localStorage.setItem("access_token", response.token);
        navigate("/Admin");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    LoginUser();    
  }, []);

  return (
    <div>
      <div>
        <label>Email:</label>
        <input type="email" name="" id="" />
      </div>

      <div>
        <label>Password:</label>
        <input type="password" name="" id="" />
      </div>

      <div>
        {user ? <p>{JSON.stringify(user)}</p> : <p>Kullanıcı bulunamadı</p>}
      </div>
     
    </div>
  );
};

export default Login;
