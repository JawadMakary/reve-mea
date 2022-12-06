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
      <Banner title={"A Community You Can Call Home"} showButtons={true} bg={"https://i.imgur.com/cukytb8.png"} />
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
            "Reve MEA tends to offer programs and services that allow clients to ensure a deluxe stay by maintaining the required knowledge and experience to match the rising demands of property investment."
          }
          image={"https://i.imgur.com/0hsCR3y.jpg"}
        />
        <Info
          title={"Our Vision"}
          description={
            "Our committee aims to contribute to social prosperity by creating sustainable and continuous real estate solutions. "
          }
          image={"https://i.imgur.com/8dKOSbv.jpg"}
        />
        <Info title={"Our Values"} description={"A guaranteed stay along with integrity and transparency is our most important values. REVE : Reliability, Efficiency, Virtue and Empowerment."} image={"https://i.imgur.com/yQTuuoX.jpg"} />
      </div>
      <Footer />
    </>
  );
};

export default Home;
