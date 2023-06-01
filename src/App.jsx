import { StyledGlobal } from "./styles/globalStyle"
import { StyledReset } from "./styles/reset"

import { Header } from "./components/Header"
import { SectionForm } from "./components/Section_Form"
import { Form } from "./components/Form"
import { TotalMoney } from "./components/Total_Money"
import { SectionList } from "./components/Section_List"

import { useState } from "react"


function App() {

  const [transitionList, setTransitionList] = useState([])

  return (
    <>
      <StyledReset />
      <StyledGlobal />

      <Header />
      <main>
        <SectionForm>
          <Form setTransitionList={setTransitionList} />
          <TotalMoney transitionList={transitionList} />
        </SectionForm>
        <SectionList transitionList={transitionList} setTransitionList={setTransitionList} />
      </main>
    </>

  )
}

export default App
