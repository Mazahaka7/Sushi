import React,{useState} from "react";
import Meals from "./Meals/Meals";
import Header from "./Layout/Header";
import Cart from "./Cart/Cart";
import CartContextProvider from "./store/CartContextProvider";


function App() {
  const [cartActive, setCartActive] = useState(false);
  
  const showCartHandler = () => {
  setCartActive(true);
  };
  const hideCartHandler = () => {
  setCartActive(false);
  }
  
  return (
  <CartContextProvider>
      {cartActive && <Cart onCloseCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
  </CartContextProvider>
  );
}

export default App;
