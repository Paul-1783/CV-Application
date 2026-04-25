import "./../../styles/preview.css";

import { ThemeContext} from '../themeContext.jsx'
import { useContext } from 'react'

export function PreviewFrame() {
    const news = useContext(ThemeContext)

     console.log("news ", news)

  return <span className="preview-frame">
    <h1>test</h1>
  </span>;
}
