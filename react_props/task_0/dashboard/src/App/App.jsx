import Notifications from '../Notifications/Notifications';
import image3 from '../assets/holberton-logo.jpg';
import './App.css';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';


function App() {

  return (
    <>
      <div>
        <Notifications />
      </div>
      <Header />
      <Login />
      <Footer />
    </>
  )
}

export default App