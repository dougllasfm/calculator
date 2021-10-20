import Layout from "./components/Layout";
import ThemeContextProvider from "./contexts/ThemeContext";
import GlobalStyles from "./styles/GlobalStyles";

function App() {  

  return (
    <>
      <ThemeContextProvider>
        <GlobalStyles />
        <Layout />
      </ThemeContextProvider>
    </>
  );
}

export default App;
