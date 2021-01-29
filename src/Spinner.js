import React from "react";

const Spinner = (props) => {
  return (
    <div>
      <div class="ui active dimmer">
        <div class="ui big text loader">{props.message}</div>
      </div>
    </div>
  );
};
// If we dont put in a message put a default message
Spinner.defaultProps = {
  message: "Loading...",
};

export default Spinner;
