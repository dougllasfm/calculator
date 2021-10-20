import { useState, createContext, ReactNode } from 'react' 

type ThemeContextType = {
  theme: string
  toggleTheme: (theme: string) => void
}

type ThemeContextProviderProps = {
  children: ReactNode;
}

export const ThemeContext = createContext({} as ThemeContextType)

export default function ThemeContextProvider(props: ThemeContextProviderProps) {
  const [theme, setTheme] = useState('theme1')

  function toggleTheme(theme: string) {
    setTheme(theme)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  )
}