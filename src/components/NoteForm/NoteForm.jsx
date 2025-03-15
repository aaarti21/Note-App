import React, { useState } from "react";
import "./NoteForm.css";
function NoteForm(props) {
  const[titletext,setTitle]= useState("")
  const[titlearea,setTitlearea]= useState("")
  const[color,setColor]=useState("#E2B1B1");

  const submitHandler=(e)=>{
    e.preventDefault();
    if(titletext === ""){return;}
    if(titlearea === ""){return;}
    if(color === ""){return;}
    props.dataFromhandler(titletext,titlearea,color)
    setTitle("")
    setTitlearea("")
    setColor("#E2B1B1")
  }
  const titleChangeHandler=(e)=>{
    setTitle(e.target.value)
   
  }
  const titleareaHandler=(e)=>{
    setTitlearea(e.target.value)
  }
  const handleChangeColor=(e)=>{
    setColor(e.target.value)
   
  }
  return (
    <>
      <div><h1>Create App</h1></div>
      <div className="note" onSubmit={submitHandler}>
        <form action="" className="note-form">
          <label htmlFor="">Note Title</label>
          <br></br>
          <input type="text" value={titletext} onChange={titleChangeHandler} placeholder="Enter title..." id="titletext" name="titletext" />
          <br></br>
          <label htmlFor="">Note Title</label>
          <br></br>
          <textarea
            name="titlearea"
            onChange={titleareaHandler}
            value={titlearea}
            id="titlearea"
            rows="5"
            placeholder="Enter title..."
          ></textarea>
          <br></br>
          <label htmlFor="">Note Color</label>
          <br></br>
          <input type="color" id="color" name="color" value={color} onChange={handleChangeColor}/>
          <br></br>
          <button className="submit-button">Submit</button>
        </form>

        <div>
          <h1>Notes</h1>
        </div>
        
        
      </div>
    </>
  );
}

export default NoteForm;
