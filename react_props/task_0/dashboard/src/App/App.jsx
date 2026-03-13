import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import { Fragment } from 'react/jsx-runtime';


function App() {

  return (
    <Fragment>
   
      <Notifications />
      <Header />
      <Login />
      <Footer />
    </Fragment>
  )
}

export default App