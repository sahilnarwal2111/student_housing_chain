import './css/App.css';
import './css/mainLayout.css';
import Nav from './Components/Student/Nav';
import Header from './Components/Header';
import Details from './Components/Student/Details';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="container">
        <Header/>
        <div className="main">
          <Nav/>
          <Details/>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
