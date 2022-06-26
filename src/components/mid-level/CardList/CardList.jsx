import "./CardList.css";
import React from "react";
import Card from "../Post/Post";

function CardList({ className, c_className, data }) {
  return (
    <ul className={className ? `il-cardList ${className}` : "il-cardList"}>
      {data ? (
        data.map((item) => (
          <li key={item.id}>
            <Card
              className={c_className ? c_className : null}
              src={item.src}
              text={item.user}
            />
          </li>
        ))
      ) : (
        <p>no data ...</p>
      )}
    </ul>
  );
}

export default CardList;
