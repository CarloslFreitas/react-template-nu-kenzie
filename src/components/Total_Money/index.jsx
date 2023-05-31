import { StyleTotalMoney } from "./style"

export const TotalMoney = () => {
    return (

        <StyleTotalMoney>
            <div>
                <p className="text-style-title-3">Valor total:</p>
                <p className="text-style-body">O valor se refere ao saldo</p>
            </div>
            <span className="text-style-title-3">R$ 8181,00</span>
        </StyleTotalMoney>

    )
}