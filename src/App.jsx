import { useState } from "react";
import "./App.css";
import { PreviewFrame } from "./components/preview/preview";
import { TabsContainer } from "./components/tabsContainer/tabsContainer";

function App() {
  const [allInputValues, setAllInputValues] = useState([]);
  console.log("allInputValues ", allInputValues);
  return (
    <>
      <TabsContainer
        allInputValues={allInputValues}
        setAllInputValues={setAllInputValues}
      />
      <PreviewFrame />
    </>
  );
}

export default App;
