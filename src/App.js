import "./App.css";
import React, {useState} from 'react';
import ReactDOM from "react-dom";
import { Dropper } from "./components/Dropper";
import { Loader } from "./components/Loader";
import { Titler } from "./components/Titler";
import { PersistentForm } from "./components/PersistentForm";

/*
 * Add a buttons group that shows four options:
 * Dropper, Loader, Titler, PersistentForm
 * when one of those buttons is clicked, the correspondent
 * component will be shown.
 * You will show just one component at a time.
 *
 */

function App() {

  const [allComponents,setAllComponents] = React.useState("") ;
  function showComponent(e){
    setAllComponents(e.target.name);
  };
  function renderComponent(){
      switch (allComponents) {
      case "dropper":
        return <Dropper></Dropper>
      case "loader":
        return <Loader></Loader>
      case "titler":
        return <Titler></Titler>
      case "form":
        return <PersistentForm></PersistentForm>
      default:
    }
  }
  return(
    <>
      <button onClick={showComponent} name="dropper">Dropper</button>
      <button onClick={showComponent} name="loader">Loader</button>
      <button onClick={showComponent} name="titler">Titler</button>
      <button onClick={showComponent} name="form">PersistentForm</button>
      {renderComponent()}
    </>
  );
}
export default App;