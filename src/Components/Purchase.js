import React from 'react';

const Purchase=(props)=>{
    return(
    <section className="Wallet">
     <h1>My Purchasses</h1>   
     <section>
     <p>you had</p>
     <p>{props.purchase+"purchase"}</p>
     </section>
    </section>
    )
}

export default Purchase;