import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  // create a usestate for alert
  const [alert, setAlert] = useState(null);

  // create a function to show alert taking two parameters
  const showAlert = (message, type) => {
    setAlert({          // set the alert
      msg: message,     // message
      type: type        // type
    })
    setTimeout(() => {  // set the timeout
      setAlert(null);   // set the alert to null
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor='#04224d';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
      <Routes>
          <Route exact path="/about" element={<About />}/>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to Analyse" mode={mode}/>} />
      </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
