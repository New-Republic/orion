import "./homeprice.scss";
import Pricecard from "../../components/PriceCard/Card";
import React from "react";

function Homeprice() {
  const users = [
    {
      name: "ЭКСПРЕСС",
      p: "ЕЖЕМЕСЯЧНЫЙ ПЛАН",
      dollar: "$",
      number: "49",
      decimol: ".99",
      item1: "Экспресс-диагностика ",
      item2: "Хронометраж операций",
      item3: "Решения по птимизации процессов",
      item4: "Расчёт сдельных расценок",
      item5: "Автоматизация бизнес-процессов",
      item6: "Разработка плана внедрения",
      item7: "Сопровождение внедрения",
      button: "Записаться",
    },
    {
      name: "ЭКСПРЕСС",
      p: "ЕЖЕМЕСЯЧНЫЙ ПЛАН",
      dollar: "$",
      number: "49",
      decimol: ".99",
      item1: "Экспресс-диагностика ",
      item2: "Хронометраж операций",
      item3: "Решения по птимизации процессов",
      item4: "Расчёт сдельных расценок",
      item5: "Автоматизация бизнес-процессов",
      item6: "Разработка плана внедрения",
      item7: "Сопровождение внедрения",
      button: "Записаться",
    },
    {
      name: "ЭКСПРЕСС",
      p: "ЕЖЕМЕСЯЧНЫЙ ПЛАН",
      dollar: "$",
      number: "49",
      decimol: ".99",
      item1: "Экспресс-диагностика ",
      item2: "Хронометраж операций",
      item3: "Решения по птимизации процессов",
      item4: "Расчёт сдельных расценок",
      item5: "Автоматизация бизнес-процессов",
      item6: "Разработка плана внедрения",
      item7: "Сопровождение внедрения",
      button: "Записаться",
    },
    {
      name: "ЭКСПРЕСС",
      p: "ЕЖЕМЕСЯЧНЫЙ ПЛАН",
      dollar: "$",
      number: "49",
      decimol: ".99",
      item1: "Экспресс-диагностика ",
      item2: "Хронометраж операций",
      item3: "Решения по птимизации процессов",
      item4: "Расчёт сдельных расценок",
      item5: "Автоматизация бизнес-процессов",
      item6: "Разработка плана внедрения",
      item7: "Сопровождение внедрения",
      button: "Записаться",
    },
  ];

  return (
    <div className="app">
      {users.map((user, idx) => {
        return (
          <Pricecard
            userName={user.name}
            userP={user.p}
            userDollar={user.dollar}
            userNumber={user.number}
            userDecimol={user.decimol}
            userItem={user.item1}
            userItem2={user.item2}
            userItem3={user.item3}
            userItem4={user.item4}
            userItem5={user.item5}
            userItem6={user.item6}
            userItem7={user.item7}
            userButton={user.button}
            key={idx + user.button}
          />
        );
      })}
    </div>
  );
}

export default Homeprice;
