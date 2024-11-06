import React, { Component } from 'react'

const products = [
{id:1,pname: 'Apple', pdesc: 'Kashmiri Apple', price: 120, quantity:100}, 
{id:2,pname: 'Apple', pdesc: 'Kashmiri Apple', price: 120, quantity: 100}, 
{id:3,pname: 'Apple', pdesc: 'Kashmiri Apple', price: 120, quantity: 100}, 
{id:4,pname: 'Apple', pdesc: 'Kashmiri Apple', price: 120, quantity:100}, 
{id:5,pname: 'Apple', pdesc: 'Kashmiri Apple', price: 120, quantity:100},
]

export default function Productstable(){
    return (
        <table>
            <tr>
                <th>No.</th>
                <th>Product Name</th>
                <th>Product Description</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Actions</th>
            </tr> I
            <tr>
                <td>{products[0].id}</td>
                <td>{products[0].pname}</td>
                <td>{products[0].pdesc}</td>
                <td>{products[0].price}</td>
                <td>{products[0].quantity}</td>
                <td> </td>
            </tr>
        </table>
    )
}
