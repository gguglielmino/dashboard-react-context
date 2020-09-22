import React, { useContext } from 'react';
import { ShopListContext } from '../contexts/ShopListContext';
import Polar from 'react-chartjs-2';

const Chart = () => {
    const { chartData } = useContext(ShopListContext);
    
    return (
        <div className="chart">
            <Polar
                data={chartData}
                options={{
                    title: {
                        display: true,
                        text: 'Category Products',
                        fontSize: 14,
                    },
                    legend: {
                        display: true,
                        position: 'bottom'  
                    }
                }}
            />
                
        </div>
    )
}

export default Chart