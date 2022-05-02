import React from 'react';
import { useAuthContext } from '../authContext/authContext';

const Login = () => {
  const { isLoading, loginUser } = useAuthContext();
  const [username, setUsername] = React.useState('');
  // const [user, setUser] = React.useState('');

  return (
    <div className='login'>
      <input type='text' placeholder='username' onChange={(e) => setUsername(e.target.value)} />
      <button onClick={() => loginUser(username)}>login</button>
    </div>
  );
};

export default Login;
