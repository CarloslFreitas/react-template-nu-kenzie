import { StyleTotalMoney } from "./style"

// eslint-disable-next-line no-unused-vars, react/prop-types
export const TotalMoney = ({transitionList}) => {

    // const total = transitionList.reduce((acc, item) => Number(item.cash) + acc , 0);

    const sumAndConvert = (list) => {
        let sumCash = 0
        list.forEach(element => {
            if(element.type === 'entrada') {
                sumCash += Number(element.cash)
            }else {
                sumCash -= Number(element.cash)
            }
        });
        return 'R$ ' +  sumCash
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