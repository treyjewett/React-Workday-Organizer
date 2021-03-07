import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="row">
      <div class="col-sm-1 hour">{props.hour}</div>
      <input class="col-md-10 taskInput" id={props.id} type="text" placeholder="Input Tasks Here"></input>
      <button onClick={() => props.saveTask(props.id)} class="col-sm-1 btn" type="submit">Save</button>
    </div>
  );
}

export default FriendCard;