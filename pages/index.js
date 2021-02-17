import Layout from "../Components/Layout";

const Home = () => {
  return (
    <Layout title="POKODEX">
      <h1 className="text-4xl mb-8 text-center"> NEXT JS Pokedex</h1>
    </Layout>
  );
};

export async function getStaticProps(context) {
  return {
    props: {},
  };
}

export default Home;
