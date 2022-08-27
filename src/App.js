import './App.css';
import bootstrap from "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from 'react-router-dom';


import Task2 from './Components/Task2';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Task2 />
        {/* <Navbar /> */}
      </BrowserRouter>

    </div>
  );
}

export default App;
