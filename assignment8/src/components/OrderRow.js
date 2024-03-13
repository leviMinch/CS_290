import React from 'react';
import SelectQuantity from './SelectQuantity';

function OrderRow({ item }) {
  return (
    <tr>
      <td>{item.name}</td>
      <td>${item.price.toFixed(2)}</td>
      <td><SelectQuantity id={item.id} /></td>
    </tr>
  );
}

export default OrderRow;