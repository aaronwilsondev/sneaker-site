import React from "react";

import "./item-card.styles.scss";

import Sneaker from "../../images/sneakers.png";

function CardItem ({id, name, imageUrl, primaryColor, secondaryColor, description, price}){


  const shoe =  {
        id:1,
        name:"Air Jordan 1 Low",
        imageUrl:"../../images/shoe-site-cutouts/air-jordan-1-low-se.png",
        price:"119",
        primaryColor:"",
        secondaryColor:"",
        description:"Always fresh and never out of style, the Air Jordan 1 Low is one of the most iconic sneakers of all time. This SE version shakes up the classic design with flavourful new colour schemes and trim details."
    }

const mouseMove = (e) => {
    if (e.target.id !== "card") {
        return
    } else {
        let xAxis = (window.innerWidth / 2 - e.pageX) /25;
        let yAxis = (window.innerHeight / 2 - e.pageY) /25;
        e.target.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
    }  
};

const mouseEnter = (e) => {
    if (e.target.id !== "card") {
        return
    } else {
        const image = e.target.firstChild.lastChild;
        console.log(image);
        e.target.style.transition = "none";
        image.style.transform = `translateZ(150px) rotateZ(45deg)`;
    }
};

const mouseLeave = (e) => {
    if (e.target.id !== "card") {
        return
    } else {
        const image = e.target.firstChild.lastChild;
    e.target.style.transition = "all 0.5s ease";
    e.target.style.transform = `rotateY(0deg) rotateX(0deg)`;
    image.style.transform = `translateZ(0px) rotateZ(0deg)`;

    } 
};

   return ( <div className="container">
          <div 
          id="card"
          className="card"
          onMouseEnter={mouseEnter}
          onMouseMove={mouseMove}
          onMouseLeave={mouseLeave}
          >
          {/* <CardItemContent/> */}
            <div className="sneaker">
              <div className="circle"></div>
              <img src={Sneaker} alt="sneaker"/>
          </div>
           <div className="info">
             <h1 className="title">{shoe.name}</h1>
             <h3>{shoe.description.substring(0, 80)}...</h3>
             <h3>${shoe.price}</h3>
            <div className="sizes">
               <button>8</button>
               <button className="active">9</button>
               <button>10</button>
               <button>11</button>
            </div>
            <div className="purchase">
               <button>purchase</button>
            </div>
           </div>
         </div>
        </div>
   )
    
}

export default CardItem;

