  import React from "react"

export default function Header(props) {
    return (
      
         <nav 
         //changing between css class names using ternary and props
            className={props.darkMode ? "dark": ""}
        >
            <img 
                className="nav--logo_icon"
                src="./logo192.png"
                width="40px"
                 alt="no item"
            />
            <h3 className="nav--logo_text">ReactFacts</h3>
            
            <div 
                className="toggler" 
            >
                <p className="toggler--light">Light</p>
                <div 
                    className="toggler--slider"
                    onClick={props.toggleDarkMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>
     )
  }