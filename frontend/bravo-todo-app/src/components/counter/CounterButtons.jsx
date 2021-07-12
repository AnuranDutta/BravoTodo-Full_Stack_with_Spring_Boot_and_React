import React from "react";

export default function CounterButtons(props){
  return (
    <div className="counter">
      <button onClick={() => props.incrementMethod(props.by)}>
        {" "}
        + {props.by}{" "}
      </button>
      <button onClick={() => props.decrementMethod(props.by)}>
        {" "}
        - {props.by}{" "}
      </button>
    </div>
  );
}
