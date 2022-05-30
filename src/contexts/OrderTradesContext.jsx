import React, {createContext, useEffect, useState } from "react";

export const OrderTradesContext = createContext();

export default function OrderTradesProvider(props){
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchAPI() {
      const res = await fetch("http://localhost:3000/api/get_information");
      const posts = await res.json();
      return posts;
    }
    fetchAPI().then((fetch_data)=>{
      let parsed_data = fetch_data['trade_orders'][0]['quoteResponse']['result'];
      console.log(parsed_data);
      setData(parsed_data);
    })
  }, []);
  return(
   <OrderTradesContext.Provider value={[data,setData]}>
    {props.children}
  </OrderTradesContext.Provider>
  );
};