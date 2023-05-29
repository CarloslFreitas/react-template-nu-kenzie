import { Button } from "./components/Button"
import { Form } from "./components/Form"
import { Input } from "./components/Input"
import { Select } from "./components/Select"

function App() {

  return (
    <>
      <Input label={'Descrição'} textHelp={'Ex: Compra de roupas'} type={'text'} id={'descriptionInput'} placeholder={'Digite aqui sua descrição'} />
      <Input label={'Valor (R$)'} textHelp={''} type={'number'} id={'valueInput'} placeholder={'Informe o valor'} />

      <Select id={'selectOption'}>
        <option value="selectOpt">Selecione a opção</option>
        <option value="entrada">Entrada</option>
        <option value="saida">Saída</option>
      </Select>

      <Button text={'Inserir valor'} />

      <Form>
        
      </Form>
      
    </>
  )
}

export default App
