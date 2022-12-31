import React from 'react';

export default function Cart(props) {
    const {cartItems, onAdd, onRemove} = props;
    const itemsPrice = cartItems.reduce((a,c) => a + c.price * c.qtd, 0);
    const shippingPrice = itemsPrice > 2000 ? 0 : 15;
    const totalPrice = itemsPrice + shippingPrice;


     return (
     <aside className="block col-1">
     <h2>Itens do carrinho</h2>
     {cartItems.map((item) => (
        <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button onClick={()=>onAdd(item)} className="add">
                  +
              </button>
              <button onClick={()=>onRemove(item)} className="remove">
                  -
              </button>
            </div>
            <div className="col-2 text-right">
            {item.qtd} x ${item.price.toFixed(2)}
            </div>
            </div>
        ))}
        {cartItems.lenght !== 0 && (
             <>
            <div className="row">
                <div className="col-2">Preço dos itens</div>
                <div className="col-1 text-right">R${itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
            <div className="col-2">Frete</div>
                <div className="col-1 text-right">R${shippingPrice.toFixed(2)}</div>
            </div>
            <div className="row">
                <div className="col-2"><strong>Total</strong></div>
                <div className="col-1 text-right">R${totalPrice.toFixed(2)}</div>
            </div>
            <hr/>
            <div className="row">
               <button onClick={() => alert('Ir para pagamento')}>
                Finalizar compra</button>
            </div>
             </>
        )}
     </aside>);
}
