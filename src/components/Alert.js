import React from "react";

export default function Alert(props) {
  // console.log(props)
  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type}`}
        role="alert"
      >
        <strong>{(props.alert.type)}! </strong>
        {props.alert.message}
      </div>
    )
  );
}
