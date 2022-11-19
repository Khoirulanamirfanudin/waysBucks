import React from "react";
import { Card, Stack } from "react-bootstrap";
import Products from "./Product";
// import '../CSS/Index.css'
import { Link, } from "react-router-dom";


const CardProduct = () => {
    
   
    return (
    <Stack direction="horizontal" gap={3} className='' style={{margin: "50px auto 20px", width: "1072px", height: "392px"}} >

        {/* card */}
        {Products.map((Product) => (
        <Card style={{ width: '18rem', borderRadius: '13px', background: "#F7DADA", border: "none", textDecoration:"none" }} key={Product.id}>
        <Link to={'/product/' + Product.id}>
        <Card.Img variant="top" src={Product.image} />
          <Card.Body >
            <Card.Title style={{ color: "#BD0707", fontSize: "18px", }}><b>{Product.title}</b></Card.Title>
            <Card.Text style={{ fontSize: "14px" }}>
                Rp. {Product.price}
            </Card.Text>
          </Card.Body>
        </Link>

          
        </Card>
        ))}
    
    </Stack>
    )
}

export default CardProduct