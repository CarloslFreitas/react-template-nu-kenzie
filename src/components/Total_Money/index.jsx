import { StyleTotalMoney } from "./style"

export const TotalMoney = ({ transitionList }) => {

    const sumAndConvert = (list) => {
        let sumCash = 0
        list.forEach(element => {
            if (element.type === 'entrada') {
                sumCash += Number(element.cash)
            } else {
                sumCash -= Number(element.cash)
            }
        });
        return sumCash.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
    }

    return (

        <StyleTotalMoney>

            <div>
                <p className="text-style-title-3">Valor total:</p>
                <p className="text-style-body">O valor se refere ao saldo</p>
            </div>
            <span className="text-style-title-3"  > {sumAndConvert(transitionList)} </span>

        </StyleTotalMoney>

    )
}