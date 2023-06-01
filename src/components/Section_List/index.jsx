import { Card } from "./card"
import { StyledSectionList } from "./style"

export const SectionList = ({ transitionList, setTransitionList }) => {

    const removeTrasitionItem = (IdItem) => {
        setTransitionList((transitionList) => transitionList.filter(item => item.id !== IdItem))
    }

    return (
        <StyledSectionList>

            <p className="text-style-title-3">Resumo financeiro</p>

            {transitionList.length > 0 ? (
                <ul>
                    {transitionList.map((item) => <Card key={item.id} item={item}
                        removeTrasitionItem={removeTrasitionItem} />)}
                </ul>
            ) : (
                <p className="text-style-title-2">Você ainda não possui nenhum lançamento</p>
            )}

        </StyledSectionList>
    )
}