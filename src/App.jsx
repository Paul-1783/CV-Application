import "./App.css";
import { PreviewFrame } from "./components/preview/preview";
import { TabsContainer } from "./components/tabsContainer/tabsContainer";
import { ThemeProvider } from"./components/themeContext.jsx";

function App() {
  return (
    <>
      <ThemeProvider>
          <TabsContainer />
          <PreviewFrame />
      </ThemeProvider>
    </>
  );
}

export default App;
