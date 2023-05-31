import { Header } from "./components/Header"
import { Form } from "./components/Form"
import { SectionForm } from "./components/Section_Form"
import { TotalMoney } from "./components/Total_Money"

function App() {

  return (
    <>
      <Header />

      <SectionForm>

        <Form />
        <TotalMoney />
        
      </SectionForm>

    </>
  )
}

export default App
