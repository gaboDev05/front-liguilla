import Avatar from "../../components/Avatar";
import { LayoutDashboard } from "./styled-components/dashboard.style.components";
import Team from "../../assets/img/madrid.png";
import ListLeague from "./components/ListLeague";
import { ContainerLeague } from "./styled-components/league.style.components";
import { ContainerTablePosition } from "./styled-components/table.style.components";
import TablePosition from "./components/TablePosition";

const src = "https://images.unsplash.com/photo-1622925492533-67508d80cc66?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80";

const data = [
    {
        'id': 1,
        'team': 'Siempre en nota',
        'win': 4,
        'draw': 0,
        'lose': 0,
        'points': 12,
        'goalsFor': 23,
        'goalsAgainst': 9,
    },
    {
        'id': 2,
        'team': 'Wakanda',
        'win': 4,
        'draw': 0,
        'lose': 0,
        'points': 12,
        'goalsFor': 20,
        'goalsAgainst': 6,
    },
    {
        'id': 3,
        'team': 'Intercity',
        'win': 3,
        'draw': 0,
        'lose': 1,
        'points': 9,
        'goalsFor': 21,
        'goalsAgainst': 18,
    }
]

const Dashboard = () => {
    return ( 
        <>
            <LayoutDashboard>
                <ContainerLeague>
                    <ListLeague></ListLeague>
                </ContainerLeague>
                <ContainerTablePosition>
                    <TablePosition data={data}></TablePosition>
                </ContainerTablePosition>
                
            </LayoutDashboard>
        </> 
    );
}
 
export default Dashboard;

/**
 * <div>
        <Avatar src={Team} isBackground/>
        <Avatar src={src}/>
        <Avatar name={'Gabo'}/>    
    </div>
 */