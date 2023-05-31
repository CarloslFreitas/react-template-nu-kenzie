import { StyleTotalMoney } from "./style"

// eslint-disable-next-line no-unused-vars, react/prop-types
export const TotalMoney = ({transitionList}) => {
    
    // const TotalMoney = transitionList.reduce((sum, money) => (money.cash) + sum, 0)
    // console.log(TotalMoney);

    return (

        <StyleTotalMoney>
            <div>
                <p className="text-style-title-3">Valor total:</p>
                <p className="text-style-body">O valor se refere ao saldo</p>
            </div>
            <span className="text-style-title-3">R$ 0,00</span>
        </StyleTotalMoney>

    )
}