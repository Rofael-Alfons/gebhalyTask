import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import classes from "../styles/container.module.css";

const SimpleContainer = (props: any) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        className={classes.container}
        maxWidth="lg"
        sx={{ display: "flex" }}
      >
        {props.children}
      </Container>
    </React.Fragment>
  );
};

export default SimpleContainer;
