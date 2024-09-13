import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";

export const LoginPage = () => {
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const emailLogin = "petite.maryy.05@gmail.com";
  const passwordLogin = "123456";

  const { formState, username, email, password, onInputChange, onResetForm } =
    useForm({
      username: "",
      email: "",
      password: "",
    });

  const onSubmit = (event) => {
    event.preventDefault();

    if (email === emailLogin && password === passwordLogin) {
      navigate("/", {
        replace: true,
      });
    } else {
      setError("Credenciales invalidas");
      onResetForm();
    }
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-center mb-3">
        <h1>Login </h1>
      </div>
      <hr />
      <div className="card p-5 mt-5">
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={onInputChange}
              className="form-control"
              placeholder="Tu nombre o usuario"
              required={true}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={onInputChange}
              className="form-control"
              placeholder={emailLogin}
              required={true}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={onInputChange}
              className="form-control"
              placeholder={passwordLogin}
              required={true}
            />
          </div>
          {error && <h4 className="text-danger"> {error} </h4>}
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
