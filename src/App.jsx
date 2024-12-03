import { useState } from "react";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Main />
      </div>
    </>
  );
}

export default App;
