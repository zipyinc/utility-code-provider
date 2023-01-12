import React from "react";
import "./card.css";

interface UtilityInterface {
  handleCard: any;
  title: string;
  description: string;
  fileName: string;
}

const Card = (props: UtilityInterface) => {

  return (
    <div className="card-item" onClick={props.handleCard}>
      <div className="card-body">
        <span className="card-title center">{props.title}</span>
        <p className="card-text">
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default Card;
