import './App.css';
import Card from './components/card/Card';
import Navbar from './components/navbar/Navbar';
import Login from './pages/Login';
import { useAuthContext } from './authContext/authContext';
import Main from './pages/Main';

function App() {
  const { user } = useAuthContext();

  return <div className='container'>{user ? <Main /> : <Login />}</div>;
}

export default App;
