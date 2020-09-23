import React from 'react';
import ShopList from '../src/components/ShopList';
import AddProduct from '../src/components/AddProduct';
import Chart from '../src/components/Chart';
import ShopListContextProvider from '../src/contexts/ShopListContext'
import './App.css'

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
        <div className="right-col">
          <ShopList />
        </div>  
      </ShopListContextProvider>  
    </div>
  )
}

export default App;