import { Header } from "./components/Header"
import { Form } from "./components/Form"
import { SectionForm } from "./components/Section_Form"
import { TotalMoney } from "./components/Total_Money"

import { useState } from "react"
import { SectionList } from "./components/Section_List"

function App() {
  // eslint-disable-next-line no-unused-vars
  const [transitionList, setTransitionList] = useState([])
  console.log(transitionList);
  return (
    <>
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
