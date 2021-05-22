import { useState } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';

const initialState = {
  email: '',
  password: '',
};

const LoginPage = ({ onLogin }) => {
  const [state, setState] = useState(initialState);
  const { email, password } = state;

  const handleChange = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onLogin(state);
    setState(initialState);
  };

  return (
    <div className="d-flex justify-content-center h-100 LOGIN">
      <div className="card">
        <h3>Login</h3>

        <div className="card-body">
          <form onSubmit={handleSubmit} autoComplete="off">
            <div className="input-group form-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fas fa-user"></i>
                </span>
              </div>
              <label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  required
                  placeholder="email"
                  autoFocus
                  onChange={handleChange}
                  className="form-control"
                />
              </label>
            </div>
            <div className="input-group form-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fas fa-key"></i>
                </span>
              </div>
              <label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  required
                  placeholder="password"
                  onChange={handleChange}
                  className="form-control"
                />
              </label>
            </div>
            <div className="form-group">
              <button
                type="submit"
                value="Login"
                className="btn float-right login_btn"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  onLogin: authOperations.login,
};

export default connect(null, mapDispatchToProps)(LoginPage);
