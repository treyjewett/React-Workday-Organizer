import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";

function Hours(props) {
  return (
    <div className="row">
      <div className="col-sm-1 hour">{props.hour}</div>
      <input className="col-md-10 taskInput" id={props.id} type="text" placeholder="Input Tasks Here"></input>
      <button onClick={() => props.saveTask(props.id)} className="col-sm-1 btn" type="submit">Save</button>
    </div>
  );
}

export default Hours;