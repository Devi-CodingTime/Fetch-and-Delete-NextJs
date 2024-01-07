import { useContext } from "react";
import { AuthContext } from "./_app";

function DataItem({ id,busName,ticketPrice,source,destination}) {
    const { data,msg,setData,setMsg} = useContext(AuthContext);
    const handleDelete = ()=>{
        // alert(index);
        if(msg!="Data Deleted"){
            let arr = data.filter((value)=>{
                return value.id!=id;
            });
            setData(arr);
            setMsg("Data Deleted");
        }
        // let timer = setTimeout(()=>{
        //     setMsg("");
        // },3000);
        // clearTimeout(timer);
        
    }
    return (<>
        <div className="data">
            <div>{id}</div>
            <div>Bus Name: {busName}</div>
            <div>{ticketPrice}/-</div>
            <div>From: {source}</div>
            <div>To: {destination}</div>
            <button onClick={()=>{handleDelete()}}>Delete</button>
        </div>
        </>
    );
}
export default DataItem;
