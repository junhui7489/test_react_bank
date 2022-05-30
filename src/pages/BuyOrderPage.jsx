import React, {useContext, useState} from 'react';
import { OrderTradesContext} from '../contexts/OrderTradesContext';
import { AccountBalanceContext } from '../contexts/AccountBalanceContext';
import ButtonAppBar from './components/Appbar';
import BuyOrdersTable from './components/BuyOrdersTable';
import AddMoneyButton from './components/AddMoneyButton';

export default function BuyOrderPage(props){
  const [balance, setBalance] = useContext(AccountBalanceContext);
  const [allTrades, getTradesData] = useContext(OrderTradesContext); 

  return(
    <div>
    <ButtonAppBar/>
    <br/>
    <span className='d-flex justify-content-between'>
    <h3>My Account Balance is ${balance}.</h3>
    <AddMoneyButton label="Add Funds"/>
    </span>
    <br/>
    <BuyOrdersTable data={allTrades}/>
    </div>
  )
}