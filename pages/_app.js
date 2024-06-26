import "@/styles/globals.css";
import React, { useEffect, useState } from "react";
export const AuthContext = React.createContext();

export default function App({ Component, pageProps }) {
  const [data, setData] = useState([]);
  const [msg, setMsg] = useState("")

  const API = "https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses"

  async function getData()
  {
    let res = await fetch(API);
    let result = await res.json();
    setData(result);
  }
  useEffect(()=>{
    getData();
  },[]);
  useEffect(()=>{
    if(msg==="Data Deleted")
    {
      setTimeout(()=>{
        setMsg("");
      },3000);
    }
  },[msg]);
  const contextValue = {
    data,setData,msg,setMsg
  };

  return (
    <AuthContext.Provider value={contextValue}>
      <Component {...pageProps} />
    </AuthContext.Provider>
  );
}
