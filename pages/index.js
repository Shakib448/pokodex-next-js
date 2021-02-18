import axios from "axios";
import Layout from "../Components/Layout";
import Link from "next/link";
import { Box, CardMedia, Grid, List, Typography } from "@material-ui/core";

const Home = ({ pokemon }) => {
  return (
    <Layout title="POKODEX">
      <Grid container justify="center">
        <Typography variant="h4"> NEXT JS Pokedex</Typography>
      </Grid>
      <List component="ul">
        {pokemon.map((pokeman, index) => (
          <List component="li" key={index}>
            <Link href={`/pokemon?id=${index + 1}`}>
              <Box
                component="div"
                className="border p-4 border-gray my-2 capitalize flex items-center text-lg bg-gray-200 rounded-md"
              >
                <CardMedia
                  component="img"
                  className="w-20 h-20 mr-3"
                  image={pokeman.image}
                  alt={pokeman.name}
                />

                <span className="mr-2 font-bold">
                  {" "}
                  {index + 1} . {pokeman.name}
                </span>
              </Box>
            </Link>
          </List>
        ))}
      </List>
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
