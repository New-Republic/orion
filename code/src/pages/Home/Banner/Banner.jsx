import React from 'react'
import "./banner.scss";
function Banner() {
    return (
        <div className="banner">
        <div className="banner__inner">
          <h1>Новый взгляд на ваш бизнес</h1>
          <p>Мы помогаем нашим клиентам выявлять <br></br>
          их 
          проблемы,
           разрабатывать решения и принимать меры.</p>
           <button><a href="#">Подробнее</a></button>
        </div>
      </div>
    )
}

export default Banner

