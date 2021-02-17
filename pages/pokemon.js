import React from "react";
import Layout from "../Components/Layout";
import Link from "next/Link";

const pokemon = ({ pokemon }) => {
  console.log(pokemon);
  return <Layout></Layout>;
};

export default pokemon;

export async function getServerSideProps({ query }) {
  const id = query.id;
  console.log(id);
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokeman = await res.json();
    const paddedId = ("00" + id).slice(-3);
    pokeman.image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
    return {
      props: { pokeman },
    };
  } catch (err) {
    console.error(err);
  }
}

// export const getServerSideProps = async ({ query }) => {
//   const id = query.id;
//   try {
//     const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
//     const pokemon = data;
//     const paddedIndex = ("00" + id).slice(-3);
//     const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`;
//     pokemon.image = image;
//     return {
//       props: { pokemon },
//     };
//   } catch (error) {
//     console.error(error);
//   }
// };
