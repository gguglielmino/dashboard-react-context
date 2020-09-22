import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios'

export const ShopListContext = createContext();

const ShopListContextProvider = (props) => {
    const [shopList, setShopList] = useState([]);
    const [chartData, setChartData] = useState({})

    const fetchShopData = () => {
        axios.get('http://us-central1-test-b7665.cloudfunctions.net/api/stores/ijpxNJLM732vm8AeajMR/products/')
            .then(res => {
                let products = res.data;
                let shopList = products.map(product => {
                    return {
                        id: product.id,
                        title: product.data.title,
                        description: product.data.description,
                        price: product.data.price,
                        category: product.data.category,
                        employee: product.data.employee
                    }
                });
                setShopList(shopList)
            })
    }

    useEffect(() => {
        fetchShopData()
    }, [])

    const getChartData = () => {
        axios.get('http://us-central1-test-b7665.cloudfunctions.net/api/stores/ijpxNJLM732vm8AeajMR/stats/categories/')
            .then(res => {
                const chartData = res.data;
                let labels = chartData.map(cat => { return cat.category });
                let numberOfProducts = chartData.map(cat => { return cat.numberOfProducts });
                setChartData(
                    {
                      labels: labels,
                        datasets: [
                            {
                              label: 'Categories',
                                data: numberOfProducts
                            }
                        ],
                        backgroundColor: 'rgb(255, 99, 132)'
                    }
                )
            })
    }

    useEffect(() => {
        getChartData()
    }, [])

    const updateChartData = shopList => {
        //Updating Chart Data
        let categories = shopList.map(el => { return el.category });
        let labels = [...new Set(categories)];
        let initialValue = {}
        let reducer = function(total, category) {
            if (!total[category]) {
                total[category] = 1;
            } else {
                total[category] = total[category] + 1;
            }
            return total;
        }
        let catObj = categories.reduce(reducer, initialValue)
        let catFrequency = Object.values(catObj)
        
        setChartData({
            labels: labels,
            datasets: [
            {
                label: 'Categories',
                data: catFrequency
            }
            ],
            backgroundColor: [
                '#FF6384',
                '#4BC0C0',
                '#FFCE56',
                '#E7E9ED',
                '#36A2EB'
            ],
        })
    }

    const addProduct = (title, description, price, category, employee) => {
        let id = Math.random().toString(35).substring(3, 15) + Math.random().toString(35).substring(2, 15);
        setShopList([...shopList, { title, description, price, category, employee, id }])
        updateChartData(shopList)
    }

    const deleteProduct = id => {
        setShopList(shopList.filter(product => product.id !== id));
        updateChartData(shopList)
    }

    return (
        <ShopListContext.Provider value={{ shopList, addProduct, deleteProduct, chartData, getChartData }}>
            {props.children}
        </ShopListContext.Provider>
    );
}

export default ShopListContextProvider;