import React from "react";
import "./App.css";
import LoginForm from "./components/Login/LoginForm";
import SignUp from "./components/SignUp/SignUp";

const App = () => {
  return (
    <div className="App">
      <h1>Login</h1>
      <LoginForm />

      <h2>SingUp</h2>
      <SignUp />

      {/* <div className="section">
        <Usuario usuarioId={1} />
      </div> */}

      {/* <div className="section">
        <Banco />
      </div> */}
      {/*
      <div className="section">
        <Descuento />
      </div> */}

      {/* <div className="section">
        <AsignacionDescuento />
      </div> */}
    </div>
  );
};

export default App;
