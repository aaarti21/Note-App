import React from "react";
import "./Model.css";
import { createPortal } from "react-dom";
function Model(props) {
  return (
    <>
      {createPortal(
        <div className="blackbox">
          <div className="message-box">
            <p>Are you sure delete this note!</p>
            <div className="btn">
              <div className="delete-btn">
                <button onClick={props.deleteHandler}>Delete</button>
              </div>
              <div className="cancle-btn">
                <button onClick={props.cancleModel}>Cancle</button>
              </div>
            </div>
          </div>
        </div>, document.getElementById("model")
      )}
    </>
  );
}

export default Model;
