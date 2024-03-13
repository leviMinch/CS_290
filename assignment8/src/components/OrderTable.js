import React from "react";
import OrderRow from './OrderRow';
import '../App.css';

function OrderTable({items}){
    return (
        <table>
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Price</th>
                    <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
                {items.map(item => (
                    <OrderRow key = {item.id} item = {item}/>
                ))}
            </tbody>
        </table>

    )
}

export default OrderTable;