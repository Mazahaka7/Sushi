import React from "react";
import Meals from "./Meals/Meals";
import Header from "./Layout/Header";
import Modal from "./UI/Modal";

function App() {
  return (
    <React.Fragment>
      <Modal />
      <Header />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
