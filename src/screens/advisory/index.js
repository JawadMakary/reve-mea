import React from 'react'
import AdvisorySection from '../../components/AdvisorySection'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import RegisterYourInterest from '../../components/RegisterYourInterest'

const Advisory = () => {
    return (
        <div className='advisory'>
         
            <Header />
            <Banner bg={"https://i.imgur.com/chszHaD.png"} title={"Advisory & Consultation"} showButtons={false} />
           <AdvisorySection/>
           <RegisterYourInterest/>
            <Footer />
        </div>
    )
}

export default Advisory