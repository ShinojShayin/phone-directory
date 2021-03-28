import React from "react";

const headerStyle = {
  textAlign: "center",
  padding: 20,
  background: "#000",
  color: "#fff",
  textTransform: "uppercase",
};

const Header = function () {
  return (
    <div className="header" style={headerStyle}>
      Phone Directory
    </div>
  );
};

// import React, {Component} from 'react';

// class MyComponent extends Component {
//    render() {
//     return (
//         // code here
//      )
//    }
// }

export default Header;
