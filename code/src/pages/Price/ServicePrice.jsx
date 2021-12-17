import React from "react";
import "./ServicePrice.scss";

const ServicePrice = (props) => {
  return (
    <div className="service">
      <div className="service__inner">
      <h3 className="service__inner-title">{props.serviceTitle}</h3>
      <p className="service__inner-price"> src={props.servicePrice}</p>
      <p className="service__inner-list">{props.serviceList}</p>
      </div>
    </div>
  );
};

export default ServicePrice;
