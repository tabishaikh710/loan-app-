import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


// import { useHistory } from 'react-router-dom';


function LoginForm() {
  const navigate= useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const history = useHistory();
  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/admin/login', { username, password });
      if (response.data.success) {
        // Redirect to another page upon successful login
        // window.location.href = '/Table';
        // // history.push('/Table'); 
        navigate("/Basecontent")
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='form'>
      <h1>Login</h1>
      <label className='flab'>Name*</label><br></br>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      /><br></br>
      <label className='flab'>Password*</label><br></br>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br></br>
      <div className='sub-D'>
      <button  className='btn' onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default LoginForm;
