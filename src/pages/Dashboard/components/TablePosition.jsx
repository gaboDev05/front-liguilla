import { StyleRowHeaderTable, StyleTablePosition, StyleHeaderTable, StyleCellTable, StyleHeaderTeam, StyleCellTeam, WrapperTitleTable, StyleTitleTable } from "../styled-components/table.style.components";

const TablePosition = ({ data }) => {
    return ( 
        <>
            <WrapperTitleTable>
                <StyleTitleTable>Standings</StyleTitleTable>
            </WrapperTitleTable>
            <StyleTablePosition>
                <StyleRowHeaderTable>
                    <tr>
                        <StyleHeaderTable>#</StyleHeaderTable>
                        <StyleHeaderTeam><strong>Team</strong></StyleHeaderTeam>
                        <StyleHeaderTable><abbr title="Win"></abbr>W</StyleHeaderTable>
                        <StyleHeaderTable><abbr title="Draw"></abbr>D</StyleHeaderTable>
                        <StyleHeaderTable><abbr title="Lose"></abbr>L</StyleHeaderTable>
                        <StyleHeaderTable><abbr title="Goals"></abbr>Goals</StyleHeaderTable>
                        <StyleHeaderTable><abbr title="Points"></abbr>PTS</StyleHeaderTable>
                    </tr>
                </StyleRowHeaderTable>
                <tbody>
                    {
                        data.map((elem) => (
                            <tr key={elem.id}>
                                <StyleCellTable>
                                    <span>{elem.id}</span>
                                </StyleCellTable>
                                <StyleCellTeam>{elem.team}</StyleCellTeam>
                                <StyleCellTable>{elem.win}</StyleCellTable>
                                <StyleCellTable>{elem.draw}</StyleCellTable>
                                <StyleCellTable>{elem.lose}</StyleCellTable>
                                <StyleCellTable>{`${elem.goalsFor}:${elem.goalsAgainst}`}</StyleCellTable>
                                <StyleCellTable>{elem.points}</StyleCellTable>
                            </tr>
                        ))
                    }
                    
                </tbody>
            </StyleTablePosition>
        </>
     );
}
 
export default TablePosition;