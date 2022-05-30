import { render, screen } from '@testing-library/react';
import LoginPage from './pages/LoginPage';
import { MemoryRouter } from 'react-router-dom';
import Router from './Router';
import PersonalOrderProvider from './contexts/PersonalOrderContext';
import AccountBalanceProvider from './contexts/AccountBalanceContext';
import OrderTradesProvider from './contexts/OrderTradesContext';
import HomePage from './pages/HomePage';
import MockPersonalData from './test/test_personal_mock.json';
import BuyOrderPage from './pages/BuyOrderPage';

describe("Login Page", ()=>{
  test('Login text', ()=> {
    render(
      <LoginPage/>, {wrapper: MemoryRouter}
    )
    const linkElement = screen.getByText(/Login/);
    expect(linkElement).toBeInTheDocument();
  })

  test('Login snapshot text', ()=> {
    render(
    <LoginPage/>, {wrapper: MemoryRouter}
    );
    const linkElement = screen.getByText(/Login/);
    expect(linkElement).toMatchSnapshot();
  })

  test('Username text', ()=> {
    render(
      <LoginPage/>, {wrapper: MemoryRouter}
    )
    const linkElement = screen.getByText("Username");
    expect(linkElement).toBeInTheDocument();
  })

  test('Username snapshot text', ()=> {
    render(
    <LoginPage/>, {wrapper: MemoryRouter}
    );
    const linkElement = screen.getByText("Username");
    expect(linkElement).toMatchSnapshot();
  })

  test('Password text', ()=> {
    render(
      <LoginPage/>, {wrapper: MemoryRouter}
    )
    const linkElement = screen.getByText("Password");
    expect(linkElement).toBeInTheDocument();
  })

  test('Password snapshot text', ()=> {
    render(
    <LoginPage/>, {wrapper: MemoryRouter}
    );
    const linkElement = screen.getByText("Password");
    expect(linkElement).toMatchSnapshot();
  })

})


describe("Personal Order Page tests", ()=>{
  test('personal order summary text', ()=>{
    render(
      <AccountBalanceProvider>
        <PersonalOrderProvider>
        <HomePage/>
        </PersonalOrderProvider>
      </AccountBalanceProvider>,{wrapper: MemoryRouter}
    )
    const linkElement = screen.getByText("Personal Order Summary");
    expect(linkElement).toBeInTheDocument();
  })

  

  test('buy trades text', ()=>{
    render(
      <PersonalOrderProvider>
        <AccountBalanceProvider>
            <HomePage/>
        </AccountBalanceProvider>
      </PersonalOrderProvider>, {wrapper: MemoryRouter}
    )
    const linkElement = screen.getByText(/Buy Trade/);
    expect(linkElement).toBeInTheDocument();

  })

  test('logout text', ()=>{
    render(
      <PersonalOrderProvider>
        <AccountBalanceProvider>
            <HomePage/>
        </AccountBalanceProvider>
      </PersonalOrderProvider>, {wrapper: MemoryRouter}
    )
    const linkElement = screen.getByText("Logout")
    expect(linkElement).toBeInTheDocument();

  })

  test('Table contains company name label', () => {
    render(
      <PersonalOrderProvider>
        <AccountBalanceProvider>
            <HomePage/>
        </AccountBalanceProvider>
      </PersonalOrderProvider>, {wrapper: MemoryRouter}
    );
    const linkElement = screen.getByText("Company Name");
    expect(linkElement).toBeInTheDocument();
  });

  test('Table contains company type label', () => {
    render(
      <PersonalOrderProvider>
        <AccountBalanceProvider>
            <HomePage/>
        </AccountBalanceProvider>
      </PersonalOrderProvider>, {wrapper: MemoryRouter}
    );
    const linkElement = screen.getByText("Company Type");
    expect(linkElement).toBeInTheDocument();
  });

  test('Table contains market cap label', () => {
    render(
      <PersonalOrderProvider>
        <AccountBalanceProvider>
            <HomePage/>
        </AccountBalanceProvider>
      </PersonalOrderProvider>, {wrapper: MemoryRouter}
    );
    const linkElement = screen.getByText("Market Cap");
    expect(linkElement).toBeInTheDocument();
  });

  test('Table contains current market price label', () => {
    render(
      <PersonalOrderProvider>
        <AccountBalanceProvider>
            <HomePage/>
        </AccountBalanceProvider>
      </PersonalOrderProvider>, {wrapper: MemoryRouter}
    );
    const linkElement = screen.getByText("Current Market Price (USD)");
    expect(linkElement).toBeInTheDocument();
  });

  test('Table contains cost price label', () => {
    render(
      <PersonalOrderProvider>
        <AccountBalanceProvider>
            <HomePage/>
        </AccountBalanceProvider>
      </PersonalOrderProvider>, {wrapper: MemoryRouter}
    );
    const linkElement = screen.getByText("Cost Price (USD)");
    expect(linkElement).toBeInTheDocument();
  });

  test('Table contains number of units label', () => {
    render(
      <PersonalOrderProvider>
        <AccountBalanceProvider>
            <HomePage/>
        </AccountBalanceProvider>
      </PersonalOrderProvider>, {wrapper: MemoryRouter}
    );
    const linkElement = screen.getByText("Number of units");
    expect(linkElement).toBeInTheDocument();
  });

  test('Table contains bought date label', () => {
    render(
      <PersonalOrderProvider>
        <AccountBalanceProvider>
            <HomePage/>
        </AccountBalanceProvider>
      </PersonalOrderProvider>, {wrapper: MemoryRouter}
    );
    const linkElement = screen.getByText(/Bought Date/);
    expect(linkElement).toBeInTheDocument();
  });

})

describe("Buy Order Page tests", ()=>{
  test('personal order summary text', ()=>{
    render(
      <AccountBalanceProvider>
        <OrderTradesProvider>
        <BuyOrderPage/>
        </OrderTradesProvider>
      </AccountBalanceProvider>,{wrapper: MemoryRouter}
    )
    const linkElement = screen.getByText("Personal Order Summary");
    expect(linkElement).toBeInTheDocument();
  })

  test('buy trades text', ()=>{
    render(
      <AccountBalanceProvider>
        <OrderTradesProvider>
        <BuyOrderPage/>
        </OrderTradesProvider>
      </AccountBalanceProvider>,{wrapper: MemoryRouter}
    )
    const linkElement = screen.getByText(/Buy Trade/);
    expect(linkElement).toBeInTheDocument();

  })

  test('logout text', ()=>{
    render(
      <AccountBalanceProvider>
        <OrderTradesProvider>
        <BuyOrderPage/>
        </OrderTradesProvider>
      </AccountBalanceProvider>,{wrapper: MemoryRouter}
    )
    const linkElement = screen.getByText("Logout")
    expect(linkElement).toBeInTheDocument();

  })

  test('Table contains company name label', () => {
    render(
      <AccountBalanceProvider>
        <OrderTradesProvider>
        <BuyOrderPage/>
        </OrderTradesProvider>
      </AccountBalanceProvider>,{wrapper: MemoryRouter}
    );
    const linkElement = screen.getByText("Company Name");
    expect(linkElement).toBeInTheDocument();
  });

  test('Table contains Current Market Price label', () => {
    render(
      <AccountBalanceProvider>
        <OrderTradesProvider>
        <BuyOrderPage/>
        </OrderTradesProvider>
      </AccountBalanceProvider>,{wrapper: MemoryRouter}
    );
    const linkElement = screen.getByText("Current Market Price (USD)");
    expect(linkElement).toBeInTheDocument();
  });

  test('Table contains `Available for Allocation` label', () => {
    render(
      <AccountBalanceProvider>
        <OrderTradesProvider>
        <BuyOrderPage/>
        </OrderTradesProvider>
      </AccountBalanceProvider>,{wrapper: MemoryRouter}
    );
    const linkElement = screen.getByText("Available for Allocation");
    expect(linkElement).toBeInTheDocument();
  });

  test('Table contains action label', () => {
    render(
      <AccountBalanceProvider>
        <OrderTradesProvider>
        <BuyOrderPage/>
        </OrderTradesProvider>
      </AccountBalanceProvider>,{wrapper: MemoryRouter}
    );
    const linkElement = screen.getByText("Action");
    expect(linkElement).toBeInTheDocument();
  });

})

describe("test data", ()=>{
  test('Json length of at least 10', ()=>{
    expect(MockPersonalData.length).toBeGreaterThanOrEqual(2);
  })

  test('Json contains correct keys', ()=>{
    for(let i of MockPersonalData) {
      expect(Object.keys(i)).toEqual(["id", "currency", "displayName", 
      "marketCap", "marketState", "messageBoardId", "postMarketChange", 
      "quoteType", "region", "regularMarketChange", 
      "regularMarketChangePercent", "regularMarketDayHigh", 
      "regularMarketDayLow", "regularMarketPrice", 
      "userCostPrice", "units", "userBuyDate"])
    }  
  })

  test('Display Name must be string', () =>{
    for(let i of MockPersonalData) {
      expect(typeof i['displayName']).toBe('string');
    }  
  })
})


