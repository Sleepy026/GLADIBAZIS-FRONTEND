import * as React from "react";
import GladiDataType from "../models/GladiDataType";
import { useLocation } from "react-router";
// import { useState } from "react";

interface Props {
  flower: GladiDataType;
}

const DetailedView: React.FC<Props> = props => {
  const location = useLocation();
  const flower: GladiDataType = location!.state! as GladiDataType;
  return (
    <div>
      <p>Name: {flower.name}</p>
      <p>Color: {flower.color}</p>
      <p>Heigth: {flower.height}</p>
      <p>Comments: {flower.comments}</p>
    </div>
  );
};

export default DetailedView;
