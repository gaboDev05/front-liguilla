import { WrapperLeague } from "../styled-components/league.style.components";
import { StyleTablePosition, StyleRowHeaderTable, StyleHeaderTable, WrapperRowTable, StyleRowItems, StyleCellTable } from "../styled-components/table.style.components";

const TablePosition = ({ data }) => {
    return ( 
        <>
            <StyleTablePosition>
                <StyleRowHeaderTable>
                    <tr>
                        <WrapperRowTable>
                            <div>
                                <StyleHeaderTable>#</StyleHeaderTable>
                                <StyleHeaderTable>Team</StyleHeaderTable>
                            </div>
                            <div>
                                <StyleHeaderTable>P</StyleHeaderTable>
                                <StyleHeaderTable>W</StyleHeaderTable>
                                <StyleHeaderTable>D</StyleHeaderTable>
                                <StyleHeaderTable>L</StyleHeaderTable>
                                <StyleHeaderTable>Goals</StyleHeaderTable>
                                <StyleHeaderTable>PTS</StyleHeaderTable>
                            </div>
                        </WrapperRowTable>
                    </tr>
                </StyleRowHeaderTable>
                <tbody>
                    {data.map((elem) => (
                        <StyleRowItems key={elem.id}>
                            <WrapperRowTable>
                                <div>
                                    <StyleCellTable>{1}</StyleCellTable>
                                    <StyleCellTable>{elem.team}</StyleCellTable>
                                </div>
                                <div>
                                    <StyleCellTable>{elem.win + elem.draw + elem.lose}</StyleCellTable>
                                    <StyleCellTable>{elem.win}</StyleCellTable>
                                    <StyleCellTable>{elem.draw}</StyleCellTable>
                                    <StyleCellTable>{elem.lose}</StyleCellTable>
                                    <StyleCellTable>{`${elem.goalsFor}:${elem.goalsAgainst}`}</StyleCellTable>
                                    <StyleCellTable>{elem.points}</StyleCellTable>
                                </div>
                            </WrapperRowTable>
                        </StyleRowItems>
                    ))}
                </tbody>
            </StyleTablePosition>
        </>
     );
}
 
export default TablePosition;