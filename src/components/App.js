import React from 'react';
import ShopList from './ShopList';
import AddProduct from './AddProduct';
import Chart from './Chart';
import ShopListContextProvider from '../contexts/ShopListContext'
import '../App.css'

const App = () => {
  return (
    <div className="App">
      <ShopListContextProvider> 
        <div className="left-col">
          <div className="left-col-components">  
            <AddProduct />   
            <Chart />
          </div>
        </div>    
        <ShopList />
      </ShopListContextProvider>  
    </div>
  )
}

export default App;
