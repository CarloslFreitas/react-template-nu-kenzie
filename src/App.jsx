import { StyledGlobal } from "./styles/globalStyle"
import { StyledReset } from "./styles/reset"

import { Header } from "./components/Header"
import { SectionForm } from "./components/Section_Form"
import { Form } from "./components/Form"
import { TotalMoney } from "./components/Total_Money"
import { SectionList } from "./components/Section_List"

import { useState } from "react"

import { createContext } from "react"

export const ThemeContext = createContext(null)

function App() {

  const [transitionList, setTransitionList] = useState([])
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
  }

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <StyledReset />
        <StyledGlobal id={theme} />

        <Header toggleTheme={toggleTheme} theme={theme} />
        <main>
          <SectionForm>
            <Form setTransitionList={setTransitionList} />
            <TotalMoney transitionList={transitionList} />
          </SectionForm>
          <SectionList transitionList={transitionList} setTransitionList={setTransitionList} />
        </main>

      </ThemeContext.Provider>
    </>

  )
}

export default App
