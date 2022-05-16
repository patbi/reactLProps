import React from "react";
import Product from "./Product";

function App() {
  return (
    <div className="App">
     <h1>Hello World</h1>

     <Product 
        name='Amazon Eco' 
        description='Your AI assistant' 
        price={60} 
     />

      <Product 
        name='iPhone 12 Pro max' 
        description='The best iphone' 
        price={1200} 
     />

     <Product 
        name='Macbook Pro' 
        description='Your Favourite Computer' 
        price={2500} 
     />
    </div>
  );
}

export default App;
