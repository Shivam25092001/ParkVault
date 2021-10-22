import './App.css';
import Firstpage from './components/Firstpage';
import Login from './components/Login';
import Navbar from './components/Navbar';
import { Mappage } from './components/mappage';
import Gopark from './components/Gopark';
import Parkverified from './components/parkverified';
import Payment from './components/payment';
import Slotpreference from './components/Slotpreference';
import Qr from './components/Qr';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar/>
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/login" exact component={Login} />
        <Route path="/map" component={Mappage} />
        <Route path="/firstpage" component={Firstpage} />
        <Route path="/slotpreference" component={Slotpreference} />
        <Route path="/gopark" component={Gopark} />
        <Route path="/parkingverified" component={Parkverified} />
        <Route path="/exit" component={Qr} />
        <Route path="/paymentmethod" component={Payment} />
      </Switch>
    </Router>
      
      {/* <Login/> */}
      {/* <Mappage /> */}
      {/* <Firstpage /> */}
      {/* <Qr  /> */}
      {/* <Mappage /> */}
      {/* <Payment /> */}
      {/* <Slotpreference /> */}
      {/* <Gopark /> */}
      
    </>
  );
}

export default App;
