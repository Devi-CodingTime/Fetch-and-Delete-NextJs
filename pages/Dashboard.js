import { useContext, useEffect } from "react";
import { AuthContext } from "./_app";

import DataItem from "./dataItem";
function Dashboard() {
  const { data, setData, msg, setMsg } = useContext(AuthContext);

  return (
    <div id="dashboardPage">
      <div id="message">{msg}</div>
      {data.map((e)=>{
        return <DataItem id={e.id} busName={e.busName} source={e.source} ticketPrice={e.ticketPrice}
        destination={e.destination}/>
      })}

      




    </div>
  );
}
export default Dashboard;
