import "./../../styles/preview.css";

 import { useContext } from 'react'

export function PreviewFrame({allForms}) {
 
  console.log("in Preview allinformation:  ", allForms)

  return <span className="preview-frame">
    <h1>{allForms.map(arr => arr.map(elem => elem.id))}</h1>
  </span>;
}