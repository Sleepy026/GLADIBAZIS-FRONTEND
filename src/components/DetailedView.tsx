import * as React from "react";
import GladiDataType from "../models/GladiDataType";
import { useLocation } from "react-router";
// import { useState } from "react";
import "../style/DetailView.css";

interface Props {
  flower: GladiDataType;
}

const DetailedView: React.FC<Props> = (props) => {
  const location = useLocation();
  const flower: GladiDataType = location!.state! as GladiDataType;
  console.log(flower);
  return (
    <div className="flowerContainer">
      <div className="pictures">
        <img src={flower.pictures[0]} alt="img" />
      </div>
      <div className="datas">
        <p className="flowerDetail">Name: {flower.name}</p>
        <p className="flowerDetail">Color: {flower.color}</p>
        <p className="flowerDetail">Height: {flower.height}</p>
        <p className="flowerDetail">Comments: {flower.comments}</p>
      </div>
    </div>
  );
};

export default DetailedView;
