import { StyledCard } from "./style"

export const Card = ({ item, removeTrasitionItem }) => {

    const cashConverter = (item) => {
        const currencyCash = Number(item.cash)
        return currencyCash.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
    }

    return (
        <StyledCard type={item.type}>

            <div className="text__container">
                <p className="text-style-title-3 ">{item.description}</p>
                <p className="text-style-body">{item.type}</p>
            </div>

            <div className="value__container">
                <p className="text-style-body" > {cashConverter(item)}</p>
                <button onClick={() => removeTrasitionItem(item.id)}>Excluir</button>
            </div>

        </StyledCard>
    )
}