import axios from "axios";
import Layout from "../Components/Layout";
import Link from "next/Link";

const Home = ({ pokemon }) => {
  return (
    <Layout title="POKODEX">
      <h1 className="text-4xl mb-8 text-center"> NEXT JS Pokedex</h1>
      <ul>
        {pokemon.map((pokeman, index) => (
          <li key={index}>
            <Link href={`/pokemon?id=${index + 1}`}></Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};
export default Home;

export const getStaticProps = async () => {
  try {
    const {
      data: { results },
    } = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=150");
    const pokemon = results.map((result, index) => {
      const paddedIndex = ("00" + (index + 1)).slice(-3);
      const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`;
      return { ...result, image };
    });
    return {
      props: { pokemon },
    };
  } catch (error) {
    console.error(error);
  }
};
