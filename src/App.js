import React, { useState } from 'react'
import Alert from './Components/Alert';
import About from './Components/About'
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm'
import {Routes, Route, Navigate} from 'react-router-dom'

function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
  const [rbtn, setRbtn] = useState('Enable Dark Mode')
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }
  const toggleMode = () => {
    let x = document.getElementById('rbtn');
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#0b042a';
      showAlert("Dark Mode has Been Enabled", "success");
      setRbtn("Enable Light Mode");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has Been Enabled", "success")
      setRbtn("Enable Dark Mode");

    }
  }
  return (
    <>
      <Navbar title="V-TextUtils" mode={mode} toggleMode={toggleMode} rbtn={rbtn} />
      <Alert alert={alert} />
      <Routes>
       <Route exact path='/' element={<TextForm showAlert={showAlert} heading="V-TextUtils / Word Counter, Character Counter" mode={mode} />}/>
       <Route exact path='/about' element={<About mode={mode}/>}/>
       <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  )
}

export default App

//continue with 13th video
