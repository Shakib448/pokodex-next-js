import React from "react";
import Layout from "../Components/Layout";
import Link from "next/link";
import axios from "axios";
import { Box, CardMedia, Grid, Typography } from "@material-ui/core";

const pokemon = ({ pokeman }) => {
  return (
    <Layout title={pokeman.name}>
      <Typography variant="h3">
        {pokeman.id}. {pokeman.name}
      </Typography>
      <CardMedia component="img" image={pokeman.image} alt={pokeman.name} />
      <Typography variant="body1" component="p">
        <Box fontWeight="fontWeightBold">Weight: {pokeman.weight}</Box>
      </Typography>
      <Typography variant="body1" component="p">
        <Box fontWeight="fontWeightBold">Height: {pokeman.height}</Box>
      </Typography>
      <Typography variant="h5">
        <Box fontWeight="fontWeightBold"> Types</Box>
      </Typography>
      {pokeman.types.map((type, index) => (
        <Typography variant="body1" component="p" key={index}>
          {" "}
          {type.type.name}
        </Typography>
      ))}
      <Grid container justify="center">
        <Typography variant="h5" type="submit">
          <Link href="/">
            <Box fontWeight="fontWeightBold">Home</Box>
          </Link>
        </Typography>
      </Grid>
    </Layout>
  );
};

export default pokemon;

export const getServerSideProps = async ({ query }) => {
  const id = query.id;
  try {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokeman = data;
    const paddedIndex = ("00" + id).slice(-3);
    const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`;
    pokeman.image = image;
    return {
      props: { pokeman },
    };
  } catch (error) {
    console.error(error);
  }
};
