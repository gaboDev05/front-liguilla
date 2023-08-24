import { WrapperLeague } from "../styled-components/league.style.components";
import { StyleTablePosition, StyleRowHeaderTable, StyleHeaderTable, WrapperRowTable, 
    StyleRowItems, StyleCellTable, RightGroup, LeftGroup} from "../styled-components/table.style.components";

const TablePosition = ({ data }) => {
    return ( 
        <>
            <StyleTablePosition>
                <StyleRowHeaderTable>
                        <WrapperRowTable>
                            <LeftGroup>
                                <StyleHeaderTable>#</StyleHeaderTable>
                                <StyleHeaderTable>Team</StyleHeaderTable>
                            </LeftGroup>
                            <RightGroup>
                                <StyleHeaderTable>P</StyleHeaderTable>
                                <StyleHeaderTable>W</StyleHeaderTable>
                                <StyleHeaderTable>D</StyleHeaderTable>
                                <StyleHeaderTable>L</StyleHeaderTable>
                                <StyleHeaderTable>Goals</StyleHeaderTable>
                                <StyleHeaderTable>PTS</StyleHeaderTable>
                            </RightGroup>
                        </WrapperRowTable>
                </StyleRowHeaderTable>
                <tbody>
                    {data.map((elem) => (
                        <StyleRowItems key={elem.id}>
                            <RightGroup>
                                <StyleCellTable>{1}</StyleCellTable>
                                <StyleCellTable>{elem.team}</StyleCellTable>
                            </RightGroup>
                            <LeftGroup>
                                <StyleCellTable>{elem.win + elem.draw + elem.lose}</StyleCellTable>
                                <StyleCellTable>{elem.win}</StyleCellTable>
                                <StyleCellTable>{elem.draw}</StyleCellTable>
                                <StyleCellTable>{elem.lose}</StyleCellTable>
                                <StyleCellTable>{`${elem.goalsFor}:${elem.goalsAgainst}`}</StyleCellTable>
                                <StyleCellTable>{elem.points}</StyleCellTable>
                            </LeftGroup>
                        </StyleRowItems>
                    ))}
                </tbody>
            </StyleTablePosition>
        </>
     );
}
 
export default TablePosition;