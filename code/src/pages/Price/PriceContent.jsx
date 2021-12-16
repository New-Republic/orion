import "./pricecontent.scss";
import "./Price/Price";
import Price from "./Price/Price";
import ServicePrice from "./Price/ServicePrice";


function PriceContent() {
  const services = [
    {
      title: "ЭКСПРЕСС",

      price: "49.99",

      description:
        "Экспресс-диагностика",
    },
    
    {
      title: "СТАНДАРТ",

      price: "2",

      description:
        "lorem ",
    },
  ];
  return (
    <div className="price">
      <Price />

      <div className="price__services">
        {services.map((service, idx) => {
          return (
            <ServicePrice
            serviceTitle={service.title}
            servicePrice={service.price}
            serviceList={service.description}
              key={idx}
            />
          );
        })}
      </div>

    </div>
  );
}
export default PriceContent;
