import React from "react";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import PropertyValuation from "../../components/PropertyValuation";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <div className="container">
        <div className="content">
          <Card
            title={"card 1"}
            description={"card 1 description"}
            bedRoomNumber={1}
            bathRoomNumber={2}
            size={4300}
            price={20000}
          />
          <Card
            title={"card 2"}
            description={"card 2 description"}
            bedRoomNumber={2}
            bathRoomNumber={3}
            size={43020}
            price={30000}
          />
          <Card
            title={"card 2"}
            description={"card 2 description"}
            bedRoomNumber={2}
            bathRoomNumber={3}
            size={43020}
            price={30000}
          />
          <Card
            title={"card 2"}
            description={"card 2 description"}
            bedRoomNumber={2}
            bathRoomNumber={3}
            size={43020}
            price={30000}
          />
        </div>

      </div>
      <PropertyValuation/>
      <Footer/>
          </>
  );
};

export default Home;
