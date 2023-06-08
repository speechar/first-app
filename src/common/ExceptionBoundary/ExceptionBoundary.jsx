import "./ExceptionBoundary.css";
import React from "react";

function template() {
  return (
    <div className="exception-boundary">
      {this.state.hasException? <h1>Something went wrong</h1> : <h1>{this.props.children}</h1>}
      
    </div>
  );
};

export default template;
