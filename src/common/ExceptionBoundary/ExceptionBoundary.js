import React    from "react";
import template from "./ExceptionBoundary.jsx";

class ExceptionBoundary extends React.Component {

  state = {
    hasException:false
  }

  static getDerivedStateFromError() {
    return {
      hasException:true
    }
  }
   
  render() {
    return template.call(this);
  }
}

export default ExceptionBoundary;
