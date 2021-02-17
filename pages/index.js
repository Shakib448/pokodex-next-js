import axios from "axios";
import Layout from "../Components/Layout";

const Home = () => {
  return (
    <Layout title="POKODEX">
      <h1 className="text-4xl mb-8 text-center"> NEXT JS Pokedex</h1>
    </Layout>
  );
};

export const getStaticProps = async (context) => {
  try {
    const {
      data: { results },
    } = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=150");
    const pokemon = results.map((result, index) => {
      const paddedIndex = ("00" + (index + 1)).slice(-3);
      const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`;
      return { ...result, image };
    });
  } catch (error) {
    console.error(error);
  }
  return {
    props: { pokemon },
  };
};

// export async function getStaticProps(context) {
//   try {
//     const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150");
//     const { results } = await res.json();
//     console.log(results);
//   } catch (error) {}
//   return {
//     props: {},
//   };
// }
export default Home;
