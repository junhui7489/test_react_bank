import React, {useContext, useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { AccountBalanceContext } from '../../contexts/AccountBalanceContext';
import { ToastContainer, toast } from 'react-toastify';
import { PersonalOrderContext } from '../../contexts/PersonalOrderContext';
import 'react-toastify/dist/ReactToastify.css';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  bgcolor: 'background.paper',
  border: '4px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BuyButton(props) {
  const [open, setOpen] = React.useState(false);
  const [plannedCost, setPlannedCost] = React.useState(0)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const label = props.label;
  const price = props.price;
  console.log(props.data);
  const [balance, setBalance] = useContext(AccountBalanceContext);
  const [personalOrders, setPersonalOrders] = useContext(PersonalOrderContext);
  //const [listDetails, setListDetails] = useContext(UserContext) //used for useContext hook

  function handleSubmit(e){
    e.preventDefault();
    if(balance < plannedCost){
      toast.error("You have insufficient funds! Please top up and try again!");
    } 
    else if (e.target.quantity.value < 1){
      toast.error("You have not entered a value. Please enter a value!");
    }
    else{
      let newBalance = parseFloat((balance - plannedCost).toFixed(2)); //set to two decimal places
      setBalance(newBalance);
      let current_date = new Date(Date.now())
      let new_current_Date = current_date.getDate()+ "-" + (current_date.getMonth()+1) + "-" + current_date.getFullYear();
      let newOrder = {"displayName": props.name, "quoteType": props.quote, "marketCap": props.cap, "regularMarketPrice": props.price, "userCostPrice": price, units: parseInt(e.target.quantity.value), userBuyDate: new_current_Date };
      let updatedPersonalOrders = [...personalOrders, newOrder];
      setPersonalOrders(updatedPersonalOrders);
      toast.success("Transaction is successful! You have added " + e.target.quantity.value + " units of " + props.name + "!");
      e.target.quantity.value = "";
      setPlannedCost(0);
    }
  }

  function updateUnitCost(e){
    let totalUnitCost = price * e.target.value;
    setPlannedCost(totalUnitCost);
  }

  return (
    <div className={props.className}>
      <ToastContainer/>
      <Button onClick={handleOpen}>{label}&nbsp;
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="col text-center">
            <h3>Buy Trade</h3>
          </div>
          <br/>
        <form className="form" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="username">
              Current Account Balance: 
            <h4>
              {balance}
            </h4>
            </label>
          </div>
          <div className="mb-3">
          <label className="form-label" htmlFor="username">
              Action:
            <h4>
              Buy
            </h4>
          </label>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="username">
              Planned Cost:
            </label>
            <h4>
              {plannedCost}
            </h4>
          </div>
          <br/>
          <div className="mb-3">
            <label className="form-label" htmlFor="username">Number of Units</label>
            <input type="number" className="form-control" onChange={updateUnitCost} id="quantity" name="quantity" min="1" max="10" required aria-required="true" />
          </div>
          <div className="col text-center">
          <button className="btn btn-primary mb-3 ">Submit</button>
          </div>
        </form>
        </Box>
      </Modal>
    </div>
  );
}