import * as React from "react";
import "../../App.css";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';

class PersonalOrdersTable extends React.Component{
  constructor(props){
      super(props);
      this.state = {newPage: 0, page: 0, rowsPerPage: 10, ownedItems: [] };
  }

  handlePageChangeHandler = (event, newPage) => {
    //console.log(newPage)
    this.setState({page: newPage})
  };

  handleChangeRowsPerPageHandler = (event) => {
    //console.log(event.target.value);
    this.setState({rowsPerPage: parseInt(event.target.value, 10)});
  };


  render() {
    return (
      <React.Fragment>
        <Box sx={{ width: '100%' }}>
          <Paper sx={{ width: '100%', mb: 2 }}>
            <TableContainer>
            <Table className='listTable' sx={{ minWidth: 800 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Company Name</TableCell>
                  <TableCell align="left">Company Type</TableCell>
                  <TableCell align="left">Market Cap</TableCell>
                  <TableCell align="left">Current Market Price (USD)</TableCell>
                  <TableCell align="left">Cost Price (USD)</TableCell>
                  <TableCell align="center">Number of units</TableCell>
                  <TableCell align="center">Bought Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                this.props.data.slice(this.state.page * this.state.rowsPerPage, this.state.page * this.state.rowsPerPage + this.state.rowsPerPage)
                .map((row) => (
                    <TableRow
                    key={row.id}
                    // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.displayName}
                    </TableCell>
                    <TableCell align="left">{row.quoteType}</TableCell>
                    <TableCell align="left">{row.marketCap}</TableCell>
                    <TableCell align="left">{row.regularMarketPrice}</TableCell>
                    <TableCell align="left">{row.userCostPrice}</TableCell>
                    <TableCell align="left">{row.units}</TableCell>
                    <TableCell align="left">{row.userBuyDate}</TableCell>
                    {/* <TableCell align="left">{row.return_date}</TableCell> */}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Box sx={{ width: '100%' }}>
          <TablePagination
            component="Box"
            rowsPerPageOptions={[5,10]}
            count={this.props.data.length}
            onPageChange={this.handlePageChangeHandler}
            rowsPerPage={this.state.rowsPerPage}
            onRowsPerPageChange={this.handleChangeRowsPerPageHandler}
            page={this.state.page}
          />
          </Box>
        </Paper>
      </Box>
    </React.Fragment>
    );
  }
}

PersonalOrdersTable.propTypes = {
  data: PropTypes.array
};

export default PersonalOrdersTable;