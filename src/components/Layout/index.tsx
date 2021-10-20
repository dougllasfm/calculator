import { useContext } from 'react' 

import Content from '../Content'
import { ThemeContext } from "../../contexts/ThemeContext"

import { Container, Header, ThemeOptions } from "./styles";

function Layout() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Container className={theme}>
      <Header className={theme}>
        <span>calculadora</span>
        <ThemeOptions className={theme}>
          <p>theme</p>
          <button onClick={() => toggleTheme('theme1')}>1</button>
          <button onClick={() => toggleTheme('theme2')}>2</button>
          <button onClick={() => toggleTheme('theme3')}>3</button>
        </ThemeOptions>
      </Header>
      <Content />
    </Container>
  );
}

export default Layout;
