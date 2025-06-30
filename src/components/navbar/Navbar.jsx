import React from 'react'
import "./navbar.css"

const Navbar = () => {
  return (
    <>
    <div className='nav-bar'>
        <div className='logo-section'>
            <div>
            <img  className='logo' src="/automation_4616824.png"/>
            </div>
            <div>
            <h1>AI CREATORS <br />
                CASHFLOW</h1>
            </div>
        </div>
        <div className="img-section">
            <div>
                <button onClick={() => {
    const el = document.getElementById("form-element");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }}>
                    Join Us Today
                </button>
            </div>
        </div>      
    </div>
    </>
   
  )
}

export default Navbar
