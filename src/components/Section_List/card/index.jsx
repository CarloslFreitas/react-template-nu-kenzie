import { StyledCard } from "./style"

export const Card = ({item, removeTrasitionItem}) => {
    return (
        <StyledCard>
            <div className="text__container">
                <p className="text-style-title-3 ">{item.description}</p>
                <p className="text-style-body">{item.type}</p>
            </div>

            <div className="value__container">
                <p className="text-style-body" >R$ {item.cash}</p>
                <button onClick={() => removeTrasitionItem(item.id)}>Excluir</button>
            </div>
        </StyledCard>
    )
}