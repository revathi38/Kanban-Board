import "./App.css";
import Center from "./components/Center";
import Header from "./components/Header";
import { useState } from "react";
import Home from "./components/Home";

function App() {
  const [boardModalOpen, setBoardModalOpen] = useState<boolean>(false);
  return (
    <>
      <Header boardOpen={boardModalOpen} setBoardOpen={setBoardModalOpen} />
      <Home />

      <Center />
    </>
  );
}

export default App;
