import React from "react";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Info from "../../components/Info";
import PropertyValuation from "../../components/PropertyValuation";

const Home = () => {
  return (
    <>
      <Header />
      <Banner title={"A Community You Can Call Home"} showButtons={true} bg={"https://i.imgur.com/chszHaD.png"} />
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
      <PropertyValuation />
      <div className="info__main__container">
        <Info
          title={"Our Mission"}
          description={
            "lorem ipsum dolor sit amet"
          }
          image={"https://i.imgur.com/0hsCR3y.jpg"}
        />
        <Info
          title={"Our Vision"}
          description={
            "lorem ipsum dolor sit amet"
          }
          image={"https://i.imgur.com/8dKOSbv.jpg"}
        />
        <Info title={"Our Values"} description={"this is the 3rd description"} image={"https://i.imgur.com/yQTuuoX.jpg"} />
      </div>
      <Footer />
    </>
  );
};

export default Home;
