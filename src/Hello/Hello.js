import React    from "react";
import template from "./Hello.jsx";

class Hello extends React.Component {
  render() {
    if (this.props.name == 'A'){
      throw new Error('Invalid name');
    }
    return template.call(this);
  }
}

export default Hello;
