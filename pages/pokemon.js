import React from "react";
import Layout from "../Components/Layout";
import Link from "next/Link";
import axios from "axios";

const pokemon = ({ pokeman }) => {
  return <Layout></Layout>;
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
