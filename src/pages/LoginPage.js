import React, { useState } from 'react';

export default function LoginPage() {
   const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation example
    if (!email || !password) {
      setError('Please fill in both fields');
      return;
    }

    // TODO: Add your authentication logic here (e.g., API call)

    alert(`Logging in with email: ${email} and password: ${password}`);
  };


  return (
    <>
      <style>{`
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          height: 100vh;
          margin: 0;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .login-wrapper {
          background: #fff;
          padding: 40px 50px;
          border-radius: 12px;
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
          width: 350px;
          max-width: 90vw;
          text-align: center;
        }

        .login-form h2 {
          margin-bottom: 25px;
          color: #333;
          font-weight: 700;
        }

        .login-form label {
          display: block;
          text-align: left;
          margin: 15px 0 6px 0;
          color: #555;
          font-weight: 600;
        }

        .login-form input {
          width: 100%;
          padding: 12px 15px;
          border: 2px solid #ddd;
          border-radius: 8px;
          font-size: 1rem;
          transition: border-color 0.3s ease;
        }

        .login-form input:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 5px rgba(102, 126, 234, 0.5);
        }

        .btn-login {
          margin-top: 30px;
          width: 100%;
          padding: 14px 0;
          font-size: 1.1rem;
          background: #667eea;
          border: none;
          border-radius: 8px;
          color: white;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.3s ease;
          box-shadow: 0 6px 12px rgba(102, 126, 234, 0.5);
        }

        .btn-login:hover {
          background: #5a67d8;
          box-shadow: 0 8px 20px rgba(90, 103, 216, 0.6);
        }

        .error-msg {
          color: #e53e3e;
          margin-top: 15px;
          font-weight: 600;
        }

        .signup-link {
          margin-top: 25px;
          font-size: 0.9rem;
          color: #666;
        }

        .signup-link a {
          color: #667eea;
          text-decoration: none;
          font-weight: 600;
        }

        .signup-link a:hover {
          text-decoration: underline;
        }
      `}</style>

      <div className="login-wrapper">
        <form className="login-form" onSubmit={(e) => {
          e.preventDefault();
          if (!email || !password) {
            setError('Please fill all fields');
            return;
          }
          setError('');
          alert(`Logging in with email: ${email}`);
        }}>
          <h2>Welcome Back</h2>

          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />

          {error && <p className="error-msg">{error}</p>}

          <button type="submit" className="btn-login">Log In</button>

          <p className="signup-link">
            Don't have an account? <a href="/signup">Sign up</a>
          </p>
        </form>
      </div>
    </>
  );
}
