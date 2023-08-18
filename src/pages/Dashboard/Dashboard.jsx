import Avatar from "../../components/Avatar";
import { LayoutDashboard } from "./styled-components/dashboard.style.components";
import Team from "../../assets/img/madrid.png";
import ListLeague from "./components/ListLeague";
import { ContainerLeague } from "./styled-components/league.style.components";

const src = "https://images.unsplash.com/photo-1622925492533-67508d80cc66?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80";


const Dashboard = () => {
    return ( 
        <>
            <LayoutDashboard>
                <ContainerLeague>
                    <ListLeague></ListLeague>
                </ContainerLeague>
                <div>
                    <Avatar src={Team} isBackground/>
                    <Avatar src={src}/>
                    <Avatar name={'Gabo'}/>    
                </div>
            </LayoutDashboard>
        </> 
    );
}
 
export default Dashboard;