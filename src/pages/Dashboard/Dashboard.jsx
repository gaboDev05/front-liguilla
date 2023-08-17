import Avatar from "../../components/Avatar";
import { ContainerLeague, LayoutDashboard } from "./styled-components/dashboard.style.components";


const Dashboard = () => {
    return ( 
        <>
            <LayoutDashboard>
                <ContainerLeague>
                    <h1>Hola</h1>
                </ContainerLeague>
                <Avatar name={'hola'}/>
            </LayoutDashboard>
        </> 
    );
}
 
export default Dashboard;