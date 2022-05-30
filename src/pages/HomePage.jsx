import React, {useContext, useEffect, useState} from 'react';
import { PersonalOrderContext } from '../contexts/PersonalOrderContext';
import { AccountBalanceContext } from '../contexts/AccountBalanceContext';
import ButtonAppBar from './components/Appbar';
import PersonalOrdersTable from './components/PersonalOrdersTable';


export default function HomePage(props){

  const [listDetails, setListDetails] = useContext(PersonalOrderContext);
  const [balance, setBalance] = useContext(AccountBalanceContext);

  return(
    <div>
      <ButtonAppBar/>
      <br/>
      <span>
      <h3>My Account Balance is ${balance}.</h3>
      </span>
      <br/>
      <PersonalOrdersTable data={listDetails}/>
    </div>
  )
}