import React from 'react'

export default function Product(props) {
const {product, onAdd} = props;
  return (
  <div>
    <img className="small" src={product.img} alt={product.name}></img>
      <h3>{product.name}</h3>
       <div>R${product.price}</div>
        <div>
             <button onClick={()=>onAdd(product)}>Adicione ao carrinho</button>
              </div>
               </div>
                )
}

