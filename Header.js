import React from 'react';

export default function Header(props) {
    const {countCarItems} = props;
      return (
        <header className="row block center">
            <div> 
             <a href="#/">
                <h1>Mundo Vintage</h1>
                </a>
                </div>
                <div>
                <a href="#/cart">

                 Carrinho 🛒 {' '}
                  {countCarItems? (
                  <button className="badge">{countCarItems}</button>
                  ) : (
                     ' '
                     )}

                 </a><a href="#/signin">Entre 🔒</a>
                  </div>
                  </header>
                  )
}
