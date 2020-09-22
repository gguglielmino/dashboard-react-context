import React, { useState, useContext } from 'react';
import { ShopListContext } from '../contexts/ShopListContext';

const AddProduct = ({shopList}) => {
    const { addProduct } = useContext(ShopListContext);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [employee, setEmployee] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        addProduct(title, description, price, category, employee);
        setTitle('');
        setDescription('');
        setPrice('');
        setCategory('');
        setEmployee('');
    }

    return (
        <form className="add-product" onSubmit={handleSubmit}>
            <label htmlFor="title">title:</label>
            <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <label htmlFor="description">Description:</label>
            <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
            <label htmlFor="price">Price:</label>
            <input type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)} />
            <label htmlFor="category">Category:</label>
            <input type="text" id="category" value={category} onChange={(e) => setCategory(e.target.value)} />
            <label htmlFor="employee">Employee:</label>
            <input type="text" id="employee" value={employee} onChange={(e) => setEmployee(e.target.value)} />
            <button className="waves-effect waves-light btn-small">Add Product</button>
        </form>
    )
}

export default AddProduct;