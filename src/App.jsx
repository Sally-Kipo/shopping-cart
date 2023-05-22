import React, { useState} from 'react';
import Bag from '../src/Images/bag.png';
import HM from '../src/Images/HM.png';
import Ketasi from '../src/Images/Ketasi.png';
import ShoppingBag from '../src/Images/shopping-bag.png';



function App() {
  const [products, setProducts] = useState([
    {
    id: 0,
    Images: Ketasi,
    title:'Nike' ,
    text:"Superstar",
    size:'8.5',
    price:'$239.55',
    button: 'Add to cart',
  },
  {
    id: 1,
    Images: HM,
    title:'H&M',
    text:"T-Shirt" ,
    size:'S',
    price:'$14.59',
    button: 'Add to cart',
  },
  {
    id: 2,
    Images: Bag ,
    title:"Gucci",
    text:"CG Marmont" ,
    price:'$1850,00',
    button: 'Add to cart',
  },
  ]);

  const [cartCount, setCartCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  function addToCart (item) {
     setCartCount((prevCount) => prevCount + 1);
     const price = parseFloat(item.price.replace(',', '').slice(1));
     setTotalPrice((prevPrice) => prevPrice + price);
  }
  return (
     
    <div className="app">
      
      <div className='nav'>
      <h1>Shopping Cart</h1>
      <img className="ShoppingBag" src={ShoppingBag} alt="" />
      <div className="ellipse">{cartCount}</div>
      <div className='productQuantity'> {products.length} Items </div>
    </div>
   
      {products.map((item) => {
        
        return (
       <div className='wrapper'>  
      <div key={item.id}className='container'>    
      <img src={item.Images} alt={item.title} />
      <div className='flex'>
      <h1>{item.title}</h1>
      <p>{item.text}</p>
      <h3>{item.size}</h3>
       </div>
       <div className='price'>
      <h2>{item.price}</h2>
      </div>
      <button className='red-button' onClick={() => addToCart(item)}> Add to cart</button>
      </div> 
      </div> 
   )
        })}
        <div className='total-wrapper'>
        <div className="total">
        Total  <h3>${totalPrice}</h3>
      </div>
      <button className='buy'>Checkout</button>
    </div>
     </div>
  );
}

export default App;
