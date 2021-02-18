import { Box, Container, Grid, makeStyles } from "@material-ui/core";
import Head from "next/head";
import React from "react";

const useStyles = makeStyles((theme) => ({
  bgColor: {
    backgroundColor: theme.palette.primary.dark,
    height: "100vh",
  },
}));

const Layout = ({ title, children }) => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.bgColor}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Grid container justify="center">
          <Grid item>{children}</Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Layout;
