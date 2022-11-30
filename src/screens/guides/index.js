import React from 'react'
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Service from '../../components/Service';
const Guides = () => {
  return (
    <div className='guide'>
      <Header/>
      <Banner 
      bg={"https://i.imgur.com/efjqDWm.png"}
         title={"Guides"}
         showButtons={false}
      />
      <Service/>
      <Footer/>
    </div>
  )
}

export default Guides