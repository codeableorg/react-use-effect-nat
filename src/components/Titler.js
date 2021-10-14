import { useState } from "react";

/*
 * Render an input field. Each time you change its value, the document.title
 * will be updated.
 */
export const Titler = () => {

  const [titler, setTitler] = useState("");

  function persistTitler(e) {
    const newTitle = e.target.value;
    setTitler(newTitle);
    document.title = newTitle;
  }

  return (
    <>
      <p>{titler}</p>
      <input type="text" onChange={persistTitler}></input>
    </>
  );
};
