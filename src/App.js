import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import Navbar from "../src/components/Navbar/Navbar.jsx";
import NoteForm from "./components/NoteForm/NoteForm.jsx";
import NoteData from "./components/Cart/NoteData.jsx";
import Model from "./components/Model/Model.jsx";

function App() {
  //create the usestates
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("storagedata")) || []
  );
  const [mode, setmode] = useState("light");
  const [model, setmodel] = useState(false);
 const [deleteid, setdeleteId] = useState("");
 
  
//print the data
  const dataFromhandler = (titletext, titlearea, color) => {
    setData((prev) => {
      return [
        ...prev,
        {
          titletext: titletext,
          titlearea: titlearea,
          color: color,
          id: Math.random(),
        },
      ];
    });
  };


  //set the localstorage
   useEffect(()=>{localStorage.setItem("storagedata", JSON.stringify(data))},[data]);
  //delete the data
  const deleteHandler = (id) => {
    const deleteitem = data.filter((item) => id !== item.id);
    setData(deleteitem);
    setmodel(false);
  };
  //condition of the light-dark mode
  const toggleMode = () => {
    console.log(mode);
    if (mode === "light") {
      setmode("dark");
    } else {
      setmode("light");
    }
  };
 
//create model with use button handler
  const openModel = (id) => {
    setmodel(true);
    setdeleteId(id);
  };
  const cancleModel = () => {
    setmodel(false);
  };
  return (
    <>
      {model && (
        <Model
          deleteHandler={() => {
            deleteHandler(deleteid);
          }}
          cancleModel={cancleModel}
        />
      )}
      <div className={`${mode === "light" ? "" : "main-container-black"}`}>

        <Navbar mode={mode} toggleMode={toggleMode} />
        
        <div className="main-container">
          <NoteForm dataFromhandler={dataFromhandler} />
          <div className="cart-items">
            {data.map((item) => (
              <NoteData
                titletext={item.titletext}
                titlearea={item.titlearea}
                color={item.color}
                mode={mode}
                openModel={() => {
                  openModel(item.id);
                }}
                cancleModel={() => {
                  cancleModel(item.id);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
