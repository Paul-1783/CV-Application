import "./../../styles/preview.css";

 import { useContext } from 'react'

export function PreviewFrame({allForms}) {
 
  console.log("in Preview allinformation:  ",allForms[0][0])

  return <span className="preview-frame">
    <div className="general-info">
    <h1>{allForms ? allForms[0][0].name : null}</h1>
    <h3>{allForms ? allForms[0][0].phone : null}</h3>
    <h3>{allForms ? allForms[0][0].email : null}</h3>
    </div>
  </span>;
}