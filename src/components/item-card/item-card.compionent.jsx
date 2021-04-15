import React from "react";

import "./item-card.styles.scss";

import Sneaker from "../../images/sneakers.png";

class CardItem extends React.Component{




mouseMove(e) {
    if (e.target.id !== "card") {
        return
    } else {
        let xAxis = (window.innerWidth / 2 - e.pageX) /25;
        let yAxis = (window.innerHeight / 2 - e.pageY) /25;
        e.target.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
    } 
   
};

mouseEnter(e) {
    if (e.target.id !== "card") {
        return
    } else {
        const image = e.target.firstChild.lastChild;
        console.log(image);
        e.target.style.transition = "none";
        image.style.transform = `translateZ(150px) rotateZ(45deg)`;
    }
}

mouseLeave(e){

    if (e.target.id !== "card") {
        return
    } else {
        const image = e.target.firstChild.lastChild;
    e.target.style.transition = "all 0.5s ease";
    e.target.style.transform = `rotateY(0deg) rotateX(0deg)`;
    image.style.transform = `translateZ(0px) rotateZ(0deg)`;

    } 
};

    render()

     { return  <div className="container">
          <div 
          id="card"
          className="card"
          onMouseEnter={this.mouseEnter}
          onMouseMove={this.mouseMove}
          onMouseLeave={this.mouseLeave}
          >
          {/* <CardItemContent/> */}
            <div className="sneaker">
              <div className="circle"></div>
              <img src={Sneaker} alt="sneaker"/>
          </div>
           <div className="info">
             <h1 className="title">sneaker name</h1>
             <h3>something about a thing about something a day ago</h3>
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
        }
    
}

export default CardItem;

