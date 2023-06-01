import { Input } from './Input'
import { Select } from './Select'
import { Button } from './Button'

import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'

import { StyleForm } from './style'

export const Form = ({ setTransitionList }) => {

    const [description, setDescription] = useState('')
    const [cash, setCash] = useState('')
    const [type, setType] = useState('entrada')

    const addNewTransition = () => {
        const newTransition = { id: uuidv4(), description, cash, type }
        setTransitionList((transitionList) => [newTransition, ...transitionList])
    }

    const submit = (e) => {
        e.preventDefault()
        addNewTransition()
        setDescription('')
        setCash('')
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
                <option value="entrada">Entrada</option>
                <option value="saida">Saída</option>
            </Select>

            <Button text={'Inserir valor'} type={'submit'} />

        </StyleForm>
    )
}