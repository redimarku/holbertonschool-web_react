import Notifications, { Fragment } from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';


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