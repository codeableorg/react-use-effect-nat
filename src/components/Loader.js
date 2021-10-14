import data from "../data/data.json"
import { useState, useEffect} from "react";
/*
 * Use useEffect to load and show the data results from data.json
 * this action will happen just when the component is mounted.
 */
export const Loader = () => {

  console.log(data);
  const [dataJson, setDataJson] = useState([]);

  useEffect(() => {
    setDataJson(data.results);
  }, [])

  return (
    <>
      <p>Loader</p>
      {dataJson.map(result => 
        <p>{result.name}</p>
        )}
    </>
  );
};
