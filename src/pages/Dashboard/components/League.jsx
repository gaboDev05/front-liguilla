import Avatar from "../../../components/Avatar";
import Team from "../../../assets/img/madrid.png";
import PropTypes from 'prop-types';
import { WrapperLeague, NameLeague } from "../styled-components/league.style.components";


const League = ({ src, name }) => {
    return ( 
        <>
            <WrapperLeague>
                <Avatar src={Team} isBackground/>
                <NameLeague>{name}</NameLeague>
            </WrapperLeague>
        </>
     );
}

League.propTypes = {
    src: PropTypes.string,
    name: PropTypes.string
}
 
export default League;
