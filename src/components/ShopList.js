import React, { useState, useContext } from 'react';
import { ShopListContext } from '../contexts/ShopListContext';

const ShopList = () => {
    const { shopList, deleteProduct } = useContext(ShopListContext);
    const [tableLayout, setTableLayout] = useState(true);

    const handleLayout = () => {
        setTableLayout(!tableLayout)
    }

    return (
        <div className="right-col">
            <button onClick={handleLayout} className="btn-change-layout waves-effect waves-light btn teal light-1 material-icons">{tableLayout ? 'apps' : 'grid_on'}</button>
            {tableLayout ? (
                <div className="shop-list-row">
                    {shopList.map(product => {
                        return (
                            <div className="shop-list-table" key={product.id}>
                                <div>
                                    <h5>Title</h5>
                                </div>
                                <div>
                                    <h5>Description</h5>
                                </div>
                                <div>
                                    <h5>Price</h5>
                                </div>
                                <div>
                                    <h5>Category</h5>
                                </div>
                                <div>
                                    <h5>Employee</h5>
                                </div>
                                <div>
                                    <h5>Action</h5>
                                </div>
                                <div>{product.title}</div>
                                <div>{product.description}</div>
                                <div>{product.price}</div>
                                <div>{product.category}</div>
                                <div>{product.employee}</div>
                                <button className="btn-shop-list waves-effect waves-light btn red lighten-1" onClick={() => deleteProduct(product.id) }>Delete</button>
                            </div>
                        )
                    })
                }
                    </div>
                ) : (
                    <div className="shop-list-cards">
                        {shopList.map(product => {
                            return (
                                <div className="card" key={product.id}>
                                    <h5>Title</h5>
                                    <p>{product.title}</p>
                                    <h5>Description</h5>
                                    <p>{product.description}</p>
                                    <h5>Price</h5>
                                    <p>{product.price}</p>
                                    <h5>Category</h5>
                                    <p>{product.category}</p>
                                    <h5>Employee</h5>
                                    <p>{product.employee}</p>
                                    <button className="btn-shop-list waves-effect waves-light btn red lighten-1" onClick={() => { deleteProduct(product.id) }}>Delete</button>
                                </div>
                            )
                        })}
                    </div>
                )
            }
        </div>
    );
}

export default ShopList