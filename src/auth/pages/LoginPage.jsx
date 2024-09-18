import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormLogin } from '../hooks/useFormLogin';
import { v } from '../../styles/variables';
import { UserContext } from '../context/UserContext';
import './styles/LoginPage.css';

const passwordLogin = '123456';

export const LoginPage = () => {
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const { formState, username, email, password, onInputChange, onResetForm } =
    useFormLogin({
      username: '',
      email: '',
      password: '',
    });

  const onSubmit = (event) => {
    event.preventDefault();

    if (password === passwordLogin) {
      const lastPath = localStorage.getItem('lastPath') || '/';
      login(username);
      navigate(lastPath, {
        replace: true,
      });
    } else {
      setError('Credenciales invalidas');
      onResetForm();
    }
  };

  useEffect(() => {
    if (error && password) {
      setError('');
    }
  }, [formState]);

  return (
    <div className="container-login">
      <div className="box-login">
        <div className="box_section1">
          <h1 className="titleSize1">Hola como estas?</h1>
          <span className="subtitle-login">Bienvenido a HeroApp</span>
        </div>
        <div className="box_section2">
          <div className="card-login">
            <h2 className="titleSize2">Login</h2>
            <form className="form-login" onSubmit={onSubmit}>
              <div className="card-contain-items">
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
              <div className="card-contain-items">
                <label className="form-label">Email</label>
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={onInputChange}
                  className="form-control"
                  placeholder="Tu correo"
                  required={true}
                />
              </div>
              <div className="card-contain-items">
                <label className="form-label">Password</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={password}
                  onChange={onInputChange}
                  className="form-control"
                  placeholder={passwordLogin}
                  required={true}
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="eye-login"
                >
                  {showPassword ? (
                    <v.eyeClose className="eye-login" />
                  ) : (
                    <v.eyeOpen className="eye-login" />
                  )}
                </span>
              </div>
              {error && <h4 className="box-password-inv"> {error} </h4>}
              <button type="submit" className="btn-hero">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
