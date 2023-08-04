import React from 'react';
import './style.css';
import Header from "./components/Header"
import MainContent from "./components/MainContent"



function App() {

  const[darkMode, setDarkMode] = React.useState(true)
  
  function pageToggleButtonHandler(){
    setDarkMode(
      prevDarkMode =>!prevDarkMode

    )
  }

  return (

    <div className="container">
      <Header darkMode={darkMode} toggleDarkMode={pageToggleButtonHandler}/>
      <MainContent darkMode={darkMode}/>
    </div>

  );
}

export default App;
