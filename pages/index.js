import axios from "axios";
import Layout from "../Components/Layout";
import Link from "next/link";
import {
  Box,
  CardMedia,
  Grid,
  List,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  listing: {
    backgroundColor: "#fff",
    display: "flex",
    margin: "5px 0",
    textTransform: "uppercase",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 20px",
    borderRadius: "25px",
    cursor: "pointer",
  },
  img: { width: 200 },
});

const Home = ({ pokemon }) => {
  const classes = useStyles();
  return (
    <Layout title="POKODEX">
      <Grid container justify="center">
        <Typography variant="h4"> NEXT JS Pokedex</Typography>
      </Grid>
      <List component="ul">
        {pokemon.map((pokeman, index) => (
          <List component="li" key={index}>
            <Link href={`/pokemon?id=${index + 1}`}>
              <Box component="div" className={classes.listing}>
                <CardMedia
                  component="img"
                  className={classes.img}
                  image={pokeman.image}
                  alt={pokeman.name}
                />

                <Typography variant="h6">
                  {" "}
                  <Box fontWeight="fontWeightBold">
                    {index + 1} {pokeman.name}
                  </Box>
                </Typography>
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
