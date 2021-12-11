import { useState, useEffect } from "react";
import "./user-card.scss";

const UserCard = () => {
  const [count, setCount] = useState(7);

  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
  }

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }

  useEffect(() => {
    document.title = `Нажато ${count} раз`;
  });

  return (
    <div className="user-card">
      <div className="user-card__info">
        <h1 className="user-card__title">Counter</h1>

        <p className="user-card__count">{count}</p>

        <button
          className="user-card__decr btn"
          onClick={decrementCount}
          style={{ marginBottom: "1.5em" }}
        >
          Lower count
        </button>
        <button className="user-card__incr btn" onClick={incrementCount}>
          Add count
        </button>
      </div>
    </div>
  );
};

export default UserCard;
