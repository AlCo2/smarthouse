import ChartComp from "@/components/chart/ChartComp";
import Login from "@/components/login/Login";
import NavBar from "@/components/navbar/NavBar"
import { useSession } from "next-auth/react"


const Dashboard = () => {
    const {data:session} = useSession();
    if(!session){
    return(
        <Login/>
    )
    }
    return (
        <>
            <NavBar/>
            <div className="main2">
                <div className="chartDiv">
                    <ChartComp/>
                </div>
            </div>
        </>
  )
}

export default Dashboard