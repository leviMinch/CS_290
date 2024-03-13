import React from 'react';
import OrderTable from '../components/OrderTable';

function OrderPage({items}){
    return (
        <>
            <h2>Order Your Groceries</h2>
            <p>Select the quantity of the items you want to buy</p>
            <OrderTable items = {items} />
        </>
    )
}

export default OrderPage;