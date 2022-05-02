import './App.css';
import Card from './components/card/Card';
import Navbar from './components/navbar/Navbar';
import Login from './pages/Login';
import { useAuthContext } from './authContext/authContext';

function App() {
  const { user } = useAuthContext();

  return (
    <div className='container'>
      {user ? (
        <>
          <Navbar />
          <Card />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
