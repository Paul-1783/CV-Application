import "./App.css";
import { useState } from "react";
import { PreviewFrame } from "./components/preview/preview";
import { TabsContainer } from "./components/tabsContainer/tabsContainer";

function App() {
  const [allForms, setAllForms] = useState([[],[],[],[],[],[],[],[]])
  
  return (
    <>
          <TabsContainer allForms={allForms} setAllForms={setAllForms} />
          <PreviewFrame allForms={allForms}/>
    </>
  );
}

export default App;
