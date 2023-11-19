import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer';
import HomePage from './Components/HomePage/HomaPage';
import CertificationServicesPage from './Components/SertificationPage/SetreficationPageServices'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <HomePage/>
      <CertificationServicesPage/>
      <Footer/>
    </div>
  );
}

export default App;
