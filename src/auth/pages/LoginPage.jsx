import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();

  const onLogin = () => {
    navigate("/", {
      replace: true,
    });
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-center mb-3">
        <h1>Login </h1>
      </div>
      <hr />
      <div className="card p-5 mt-5">
        <form>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              name="username"
              className="form-control"
              required={true}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              required={true}
            />
          </div>
        </form>
        <button className="btn btn-primary" onClick={onLogin}>
          Login
        </button>
      </div>
    </div>
  );
};
