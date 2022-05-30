import React, {useContext, useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { AccountBalanceContext } from '../../contexts/AccountBalanceContext';
import { ToastContainer, toast } from 'react-toastify';
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

export default function AddMoneyButton(props) {
  const [open, setOpen] = React.useState(false);
  const [plannedFunds, setPlannedFunds] = React.useState(0)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const label = props.label;
  console.log(props.data);
  const [balance, setBalance] = useContext(AccountBalanceContext);
  //const [listDetails, setListDetails] = useContext(UserContext) //used for useContext hook

  function handleSubmit(e){
    e.preventDefault();
    if(e.target.quantity.value > 10000){
      toast.error("You can only deposit a maximum of 10000 dollars!");
    } 
    else if (e.target.quantity.value < 100){
      toast.error("You need to deposit a minimum of 100 dollars");
    }
    else{
      let newBalance = balance + parseInt(e.target.quantity.value);
      setBalance(newBalance);
      toast.success("Funds added successfully! You have added USD " + e.target.quantity.value + "!");
      e.target.quantity.value = "";
      setPlannedFunds(0);
    }
  }

  function updateFunds(e){
    let totalFunds = balance + parseInt(e.target.value);
    setPlannedFunds(totalFunds);
  }

  return (
    <div className={props.className}>
      <ToastContainer/>
      <Button style={{backgroundColor: 'lightgreen'}}onClick={handleOpen}>{label}&nbsp;
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="col text-center">
            <h3>Add funds</h3>
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
                Add Funds
              </h4>
            </label>
            </div>
            <div className="mb-3">
                <label className="form-label" htmlFor="username">
                  Expected Total Funds:
                </label>
                <h4>
                  {plannedFunds}
                </h4>
              </div>
            <br/>
            <div className="mb-3">
              <label className="form-label" htmlFor="username">Funds to Add</label>
              <input type="number" class="form-control"  onChange={updateFunds} id="quantity" name="quantity" min="100" max="10000" required aria-required="true" />
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