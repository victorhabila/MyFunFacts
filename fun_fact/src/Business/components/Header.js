
import React from "react"


export default function Header(){
    return(
        <div className="nav-head">
            <img src="./personImg.png" width="300px" alt="no item" className="nav--icon"/>
            <h1>Victor Habila</h1>
            <h2>Frontend Developer</h2>
            <p>victorhabila.website</p>

            <div className="contacts">
                <div>
                <img src="./Mail.png" width="40px" alt="no item" className="nav--icon"/>
                <h1>Email</h1>
                </div>
                <div>
                <img src="./linkedin.png" width="40px" alt="no item" className="nav--icon"/>
                <h1>Linkedin</h1>
                </div>
            </div>

        </div>
        
    )
}