import { StyleTitleLeague, WrapperTitleLeague } from "../styled-components/league.style.components";
import League from "./League";

const items = ['Apple', 'Banana', 'Cherry'];

const ListLeague = () => {
    return ( 
        <>
            <WrapperTitleLeague>
                <StyleTitleLeague>Your League</StyleTitleLeague>
            </WrapperTitleLeague>
            <ul>
                {items.map(item => (
                    <League key={Math.random()} name={item}/>
                ))}
            </ul>
        </>
     );
}
 
export default ListLeague;