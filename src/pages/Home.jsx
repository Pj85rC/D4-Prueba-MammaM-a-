import Card from "../components/Card";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <hr className="w-75 mx-auto" />
      <div className="container">
        <Card />
      </div>
    </>
  );
};

export default Home;
