import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

function CardItem(props: any) {
  const theme = useTheme();

  return (
    <Card
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        margin: "20px",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {props.title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Price : {props.price} x {props.quantity}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Total : {props.total}
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <IconButton onClick={() => props.decrease(props.title)}>-</IconButton>
          <IconButton
            style={{ fontSize: "15px" }}
            onClick={() => props.remove(props.title)}
          >
            Remove from Cart
          </IconButton>
          <IconButton onClick={() => props.increase(props.title)}>+</IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={props.imgURL}
        alt="Live from space album cover"
      />
    </Card>
  );
}
export default CardItem;
