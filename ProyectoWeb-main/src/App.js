import Formm from './components/Formm'
import "bootstrap/dist/css/bootstrap.min.css";
import { GeoAltFill } from 'react-bootstrap-icons';

function App() {
  return (
    <>     
        <nav className="navbar navbar-expand-sm navbar-light" Style="background-color: #2472C6">
          <a className="p-3 navbar-brand" href="/">
          <h1><GeoAltFill size={32} className="d-inline-block align-top"/>
            
              UVcación</h1>
          </a>            
        </nav>
        <div className="container mt-3 " >
          <div className="row justify-content-center">
            <div className="col-sm-6"> 
            <h2 Style="color: #2472C6">Ingresa los datos del curso</h2>
          </div>          
        </div>
        <Formm />
        </div>
    </>
  );
}

export default App;
