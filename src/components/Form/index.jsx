import { Input } from './Input'
import { Select } from './Select'
import { Button } from './Button'

import { useState } from 'react'

import { StyleForm } from './style'

// eslint-disable-next-line react/prop-types
export const Form = () => {

    const [description, setDescription] = useState('')
    const [cash, setCash] = useState('')
    const [type, setType] = useState('Selecione a opção')

    const submit = (e) => {
        e.preventDefault()
        console.log({ description, cash, type })
        setDescription('')
        setCash('')
        setType('Selecione a opção')
    }

    return (
        <StyleForm onSubmit={submit}>

            <Input
                label={'Descrição'}
                textHelp={'Ex: Compra de roupas'}
                type={'text'} id={'descriptionInput'}
                placeholder={'Digite aqui sua descrição'}
                value={description}
                onChange={(e) => setDescription(e.target.value)} />

            <Input
                label={'Valor (R$)'}
                textHelp={''}
                type={'number'}
                id={'valueInput'}
                placeholder={'Informe o valor'}
                value={cash}
                onChange={(e) => setCash(e.target.value)} />

            <Select id={'selectOption'} onChange={(e) => setType(e.target.value)}>
                <option value="selectOpt">Selecione a opção</option>
                <option value="entrada">Entrada</option>
                <option value="saida">Saída</option>
            </Select>

            <Button text={'Inserir valor'} type={'submit'} />

        </StyleForm>
    )
}