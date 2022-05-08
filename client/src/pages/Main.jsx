import React from 'react';
import { io } from 'socket.io-client';
import { useAuthContext } from '../authContext/authContext';
import Card from '../components/card/Card';
import Navbar from '../components/navbar/Navbar';

const Main = () => {
  const { user } = useAuthContext();
  const [posts, setPosts] = React.useState([]);
  const [socket, setSocket] = React.useState(null);

  React.useEffect(() => {
    fetch('http://localhost:3004/posts')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setSocket(io('http://localhost:3005'));
      })
      .catch((err) => {
        throw new Error(err.message);
      });
  }, []);

  React.useEffect(() => {
    if (socket && user) socket.emit('newUser', user.name);
  }, [socket, user]);

  return (
    <div className='mainContainer'>
      <p className='username'>{user.name}</p>
      <Navbar socket={socket} />
      <div className='mainContent'>
        {!!posts &&
          posts.map((x) => (
            <Card key={x.id} post={x} socket={socket} username={user.name} />
          ))}
      </div>
    </div>
  );
};

export default Main;
