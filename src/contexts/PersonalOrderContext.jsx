import React, {createContext, useEffect, useState } from "react";

export const PersonalOrderContext = createContext();

export default function PersonalOrderProvider(props){
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchAPI() {
      const res = await fetch("http://localhost:3000/api/get_personal_orders");
      const posts = await res.json();
      return posts;
    }
    fetchAPI().then((fetch_data)=>{
      console.log(fetch_data['get_personal_orders']);
      setData(fetch_data['get_personal_orders']);
    })
  }, []);
  return(
   <PersonalOrderContext.Provider value={[data,setData]}>
    {props.children}
  </PersonalOrderContext.Provider>
  );
};