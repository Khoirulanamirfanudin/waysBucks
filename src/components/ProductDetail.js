/* eslint-disable jsx-a11y/alt-text */
import React, { useParams } from "react-router-dom";
import Products from "./Product";
import {Container}from 'react-bootstrap';


 const ProductDetail = () => {
    const {id} = useParams() //int
    const dataProduct = []
    for (
        let index = 0; index<Products.length;index++
    ) {
        if(Number(Products[index].id )=== Number(id)){ //object
            dataProduct.push(Products[index])
        }
    }
    console.log(dataProduct)
    return (
        <>
        <Container className="mt-5 d-flex">
        <div>
            <img src = {dataProduct[0].image} />
        </div>

        <div className="ms-5">
            <div>
             <h1>{dataProduct[0].title}</h1>
            </div>

            <div>
            Rp. {dataProduct[0].price}
            </div>

            <div className="mt-3">
                Topping
            </div>
        </div>
         
        
        </Container>
        </>
        
        
        )

}

export default ProductDetail