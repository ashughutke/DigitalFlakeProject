import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';




const users = [
    { username: "user1", email:"test@admin.com", password: "pass1" },
    { username: "user2", email:"test@user.com", password: "pass2" }
  ];

const Login = ({ children }) => {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  
  const handleSubmit = (event) => {
    event.preventDefault();
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      const token = "fake-jwt-token-" + user.username;  // Simulate a JWT token
      localStorage.setItem('token', token);  // Store the token in localStorage
      navigate('/home');  // Redirect to dashboard
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="loginScreen">
        <div className="Container-fluid">
        <div className="row">
            <div className="col-md-5">
                <div className="card w-100">
                    <div className="card-body">
                        <div className="text-center">
                            <img 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYGpMv3HPEQSbDil9UHRiegYz8O_FcTH3aaAMZoL5-RQ&s"
                            width="100"
                            className="mx-auto mb-1" />
                            <p className="text-muted">Welcome to Digitalflake Admin</p>
                        </div>
                        
                        <form onSubmit={handleSubmit}>
                            <div className="form-group mb-3">
                            <label htmlFor="email">Email:</label>
                            <input
                                id="email"
                                type="text"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            </div>
                            <div className="form-group mb-3">
                            <label htmlFor="password">Password:</label>
                            <input
                                id="password"
                                type="password"
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            </div>
                            <p className="text-end"><a href="handleShow">Forgot Password ?</a></p>
                            <button type="submit" className="btn btn-primary">Login</button>
                            {error && <p>Error: {error}</p>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>

        
    </div>
  );
};

export default Login;