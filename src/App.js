import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Banner from './component/Banner';

function App() {
  return (
    <div className="App">
     <Banner/>
     <Footer/>
    </div>
  );
}

export default App;
