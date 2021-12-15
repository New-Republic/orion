import React from 'react'
import "./HomeServices.scss";
import HomeservicesTitle from './HomeservicesTitle';


const HomeServices = (props) => {
    return (
      
     
           <div className="card">
          
             <div className="card__inner">
               <img className="card__img" src={props.cardImg} alt="" />
                 <h3 className="card__title">{props.cardTitle}</h3>
                  <p className="card__descr">{props.cardDescription}</p>
          </div>
          
         </div>
        
     
  
        
          
    );
  };
  

  

export default HomeServices;






