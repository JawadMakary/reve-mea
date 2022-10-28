import React from 'react'
import './Card.css'
const Card = ({title,description,bedRoomNumber,bathRoomNumber,size,price}) => {
  return (
    <>
        <div className="box ">
            <div className="image">
                <img src="https://i.postimg.cc/CMWZFf2z/villa-1.jpg" alt=""/>
                <div className="overlay"></div>
            </div>
            <div className="info">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="home-parts">
                    <div className="parts">
                        <span>bedrooms</span>
                        <div className="number">
                            <i className="fa-solid fa-bed"></i>
                            <span>{bedRoomNumber}</span>
                        </div>
                    </div>
                    <div className="parts">
                        <span>bathrooms</span>
                        <div className="number">
                            <i className="fa-solid fa-shower"></i>
                            <span>{bathRoomNumber}</span>
                        </div>
                    </div>
                    <div className="parts">
                        <span>area</span>
                        <div className="number">
                            {/* <i className="fa-solid fa-square"></i> */}
                            <span>{size}</span>
                        </div>
                    </div>
                </div>
                <div className="card__price">
                    <span>for sale</span>
                    <span>${price}</span>
                </div>
            </div>
        
     
    </div>
</>
  )
}

export default Card