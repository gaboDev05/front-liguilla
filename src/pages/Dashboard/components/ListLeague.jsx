import { StyleTitleLeague, WrapperTitleLeague, WrapperListLeague } from "../styled-components/league.style.components";
import League from "./League";

const items = ['Apple', 'Banana', 'Cherry'];

const ListLeague = () => {
    return ( 
        <>
            <WrapperTitleLeague>
                <StyleTitleLeague>Your League</StyleTitleLeague>
            </WrapperTitleLeague>
            <WrapperListLeague>
                {items.map(item => (
                    <League key={Math.random()} name={item}/>
                ))}
            </WrapperListLeague>
        </>
     );
}
 
export default ListLeague;