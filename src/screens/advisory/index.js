import React from 'react'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

const Advisory = () => {
    return (
        <div className='advisory'>
            <Header />
            <Banner bg={"https://i.imgur.com/efjqDWm.png"} title={"Advisory & Consultation"} showButtons={false} />

            <Footer />
        </div>
    )
}

export default Advisory