import React, {createContext, useEffect, useState } from "react";

export const AccountBalanceContext = createContext();

export default function AccountBalanceProvider(props){
  const [data, setData] = useState(0);
  useEffect(() => {
    setData(1000)
  }, []);
  return(
   <AccountBalanceContext.Provider value={[data,setData]}>
    {props.children}
  </AccountBalanceContext.Provider>
  );
};