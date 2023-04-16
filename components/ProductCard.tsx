import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import classes from "../styles/card.module.css";
import { useSelector } from "react-redux";

export default function ProductCard(props: any) {
  const cart = useSelector((state: any) => state.products.cart);
  const addedOrNot = cart.find((product) => product.title === props.title);
  const addToCart = props.addToCart;
  return (
    <Card className={classes.card} sx={{ maxWidth: 200 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        sx={{
          textAlign: "center",
          width: "100%",
          height: "100%",
        }}
        image={props.imgURL}
      />
      <CardContent>
        <h3>{props.title}</h3>
        <h3 style={{ margin: "10px", color: "blue" }}>
          Price : {props.price}$
        </h3>
      </CardContent>
      <CardActions style={{ display: "flex", justifyContent: "center" }}>
        <Button onClick={() => addToCart(props.title)} size="small">
          {addedOrNot ? "IN CART" : "Add To Cart"}
        </Button>
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
  );
}
