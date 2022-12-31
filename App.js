import Header from './Componentes/Header';
import Main from './Componentes/Main';
import Cart from './Componentes/Cart';
import data from './Componentes/data';
import { useState } from 'react';


function App1() {
const {products} = data;
const {cartItems, setCartItems} = useState([]);
const onAdd = (products) => {
  const exist = cartItems.find(x => x.id === products.id);

  if (exist) {
    setCartItems(cartItems.map((x) =>
    x.id === products.id ? {...exist, qtd: exist.qtd +1 } : x
  )
);
} else {
  setCartItems([...cartItems, {...products, qtd:1}]);
};
const onRemove = (products) => {
  const exist = cartItems.find((x) => x.id === products.id)};
if (exist.qtd === 1) {
  setCartItems(cartItems.filter((x) => x.id !== products.id));
} else {
  setCartItems(cartItems.map((x) => 
  x.id === products.id ? {...exist, qtd: exist.qtd -1} : x
  ))
}}

return (
    <div className="App">
     <Header countCarItems={cartItems.length}></Header>
     <div className="row">
      <Main onAdd={onAdd} products={products}></Main>
     <Cart onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}></Cart>
     </div>
    </div>
  );
}

export default App1;
