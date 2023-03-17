import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import mainLogo from "@assets/images/logo.webp";

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const [pass, setPass] = useState([]);
  const apiUrl = `http://www.agroayacucho.gob.pe:8087`;

  const handleUser = (e) => {
    setUser(e.target.value)
  }
  const handlePass = (e) => {
    setPass(e.target.value)
  }
  const handleApi = () => {
    console.log({ user, pass });
    axios.post(`${apiUrl}/login`, {
      user: user,
      pass: pass
    }, {
      headers: {
        "Content-Type": "text/plain",
        'Accept': "text/plain",
      }
    })
      .then(result => {
        console.log(result.data)
        alert('success')
        console.log(result.data["token"])
        sessionStorage.setItem("token", result.data["token"])
        sessionStorage.setItem('token', result.data.token)
        navigate('/home')
      })
      .catch(error => {
        alert('service error')
        console.log(error)
      })
  }
  return (
    <>
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-12 col-md-8 col-lg-6">
              <div className="border border-3 border-primary"></div>
              <div className="card bg-white shadow-lg">
                <div className="card-body p-5">
                  <form className="mb-3 mt-md-4">
                    <img className="mb-4 mt-10 md:mt-0" alt="Logotipo de Dirección Regional Agraria de Ayacucho"  src={mainLogo}></img>
                    <div className="mb-3">
                      <label htmlFor="user" className="form-label ">Usuario</label>
                      <input value={user} onChange={handleUser} type="text" className="form-control" id="user" placeholder="Usuario o DNI" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="pass" className="form-label ">Password</label>
                      <input value={pass} onChange={handlePass} type="password" className="form-control" id="pass" placeholder="***" />
                    </div>
                    <div className="d-grid">
                      <input onClick={handleApi} className="btn btn-outline-dark" defaultValue="Login" />
                    </div>
                  </form>
                  <div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;