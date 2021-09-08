import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import Profile from './Components/Profile';
import Wallet from './Components/Wallet';
import Purchase from './Components/Purchase';   
const App=()=>{
  return(
    <section className="wrapper">
    <section className="col">
    <Profile firstname="mike" lastname="smith" job="pilot"/>
    </section>
    <secttion className="kam">
    <Wallet money="13$"/>
    <Purchase purchase='1'/>
    </secttion>
    </section>
  )
}

ReactDOM.render(<App />,document.getElementById('root'));