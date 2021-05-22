import { useState } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';

const initialState = {
  name: '',
  email: '',
  password: '',
};

const RegisterPage = ({ onRegister }) => {
  const [state, setState] = useState(initialState);
  const { name, email, password } = state;

  const handleChange = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onRegister(state);

    setState(initialState);
  };
  return (
    <div className="d-flex justify-content-center h-100">
      <div className="card">
        <h3>Register</h3>

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
                  type="name"
                  name="name"
                  value={name}
                  required
                  placeholder="name"
                  onChange={handleChange}
                  className="form-control"
                  autoFocus
                />
              </label>
            </div>
            <div className="input-group form-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fas fa-envelope"></i>
                </span>
              </div>
              <label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  required
                  placeholder="email"
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
                value="register"
                className="btn float-right login_btn"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterPage);
