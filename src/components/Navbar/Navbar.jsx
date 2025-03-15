import React from "react";
import "./Navbar.css";
import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";

function Navbar({ toggleMode, mode }) {
  return (
    <>
      <div
        className={`${
          mode === "light" ? "navbar-container" : "navbar-container-black"
        }`}
      >
        <div>
          <h1>Notes</h1>
        </div>
       
        <div className="moon-icon">
        {mode==="light" ?<FaMoon onClick={toggleMode}/>:<MdSunny onClick={toggleMode}/>}
        </div>
      
      </div>
    </>
  );
}

export default Navbar;
