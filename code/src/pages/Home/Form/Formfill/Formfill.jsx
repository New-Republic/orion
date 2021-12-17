import React from 'react'
import "./formfil.scss"

function Formfill() {
    return (
        <div class="container">  
  <form id="contact" action="" method="post">
    <h3>Форма запроса</h3>
    
    <fieldset>
      <input placeholder="ФИО" type="text" tabindex="1" required autofocus/>
    </fieldset>
    <fieldset>
      <input placeholder="Почтовый адрес" type="email" tabindex="2" required/>
    </fieldset>
    <fieldset>
      <input placeholder="Номер телефона" type="tel" tabindex="3" required/>
    </fieldset>
    
    <fieldset>
      <textarea placeholder="Ваше сообщение" tabindex="5" required></textarea>
    </fieldset>
    <fieldset>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Отправить</button>
    </fieldset>
   
  </form>
</div>
    )
}

export default Formfill


