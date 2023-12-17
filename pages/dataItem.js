import { useContext } from "react";
import { AuthContext } from "./_app";

function DataItem({ }) {
    const { data,msg,setData,setMsg} = useContext(AuthContext);
    const handleDelete = (index)=>{
        // alert(index);
        let arr = data.filter((value)=>{
            return value.id!=index;
        });
        setData(arr);
        setMsg("Data Deleted");

        let timer = setTimeout(()=>{
            setMsg("");
        },3000);
        clearTimeout(timer);
        
    }
    return (<>
    {data.map((i,index)=>{
            return(<div className="data">
            <div>{index+1}</div>
            <div>Bus Name: {i.busName}</div>
            <div>{i.ticketPrice}/-</div>
            <div>From: {i.source}</div>
            <div>To: {i.destination}</div>
            <button onClick={()=>{handleDelete(index)}}>Delete</button>
        </div>)
        })}</>
    );
}
export default DataItem;
