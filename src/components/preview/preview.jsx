import "./../../styles/preview.css";

import { ThemeContext} from '../themeContext.jsx'
import { useContext } from 'react'

export function PreviewFrame() {
  const allInformation = useContext(ThemeContext)

  console.log("in Preview allinformation:  ", allInformation)

  return <span className="preview-frame">
    <h1>test</h1>
  </span>;
}