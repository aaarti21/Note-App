import React from "react";
import "./cart.css";
function NoteData(props) {
  return (
    <>
      <div className="shopping-cart" style={{ backgroundColor: props.color }}>
        <h3> {props.titletext}</h3>
        <p>{props.titlearea}</p>
        <button className="delete-button" onClick={props.openModel}>
          Delete
        </button>
      </div>
    </>
  );
}

export default NoteData;
