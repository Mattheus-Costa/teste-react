import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Card from './Card.jsx'
import Student from './Student.jsx'
import UserGreeting from './UserGreeting.jsx'

function App() {

  return(
    <>
    <Header />
    <UserGreeting isLoggedIn = {true} username="Tadeu"/>
    <Footer />
    <Card />
    <Card />
    <Student name="eu" age= {30} IsStudent={true} />
    <Student />
    </>
  )
}

export default App
