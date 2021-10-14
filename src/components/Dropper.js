import { useEffect } from "react";
/*
 * Create a component that adds an event listener to the root document
 * that event listener expects a drop event.
 * if the drop happens then you show the dropped file data in the console,
 * the console shows no more than one output on each drop
 */
export const Dropper = () => {

  const onDragOver = (e) => {
    e.preventDefault();
  }

  function onDrop(e) {
    e.preventDefault();
    console.log(e.dataTransfer.files);
  };

  useEffect(() => {
    const container = document.querySelector(".body");
    container.addEventListener("dragover", onDragOver);
    container.addEventListener("drop", onDrop);
    return () => {
      container.addEventListener("dragover", onDragOver);
      container.addEventListener("drop", onDrop);
    }
  }, []);
  return (
    <>
    <p>Dropper</p>
    <section className="body">
      <div className="dropper">
        <div className="dropper-in">
          Drop your file here!
        </div>
      </div>
    </section>

    </>
  );
};
