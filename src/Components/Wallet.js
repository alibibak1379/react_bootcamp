import React from 'react';

const Wallet=(props)=>{
    return(
    <section className="Wallet">
     <h1>My Wallet</h1>   
     <section>
     <p>you have</p>
     <p>{props.money}</p>
     </section>
    </section>
    )
}

export default Wallet;