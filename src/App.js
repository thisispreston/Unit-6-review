import React from "react";
import Header from "./Components/Header";
import AuthHeader from "./Components/AuthHeader";
import "./App.css";

function App(props) {
  return (
    <div className="App">
      {props.location.pathname === "/" ||
      props.location.pathname === "/register" ? (
        <>
          <AuthHeader />
          {/* something goes here */}
        </>
      ) : (
        <>
          <Header />
          {/* something goes here */}
        </>
      )}
    </div>
  );
}

export default App;
