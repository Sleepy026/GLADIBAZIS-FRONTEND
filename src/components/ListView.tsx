import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import GladiDataType from "../models/GladiDataType";
import { Link } from "react-router-dom";
import "../style/listView.css";

interface Props {}

const ListView: React.FC<Props> = () => {
  const [gladiData, setGladiData] = useState<GladiDataType[]>();
  useEffect(() => {
    axios
      .get(`http://localhost:8080/all_gladiolus`)
      .then(res => {
        setGladiData(res.data);
        console.log(res.data);
      })
      .catch(error => console.log(error));
  }, []);
  return (
    <div className="list">
      {gladiData?.map((gladi: GladiDataType) => (
        <div className="card">
          <img src={gladi.pictures} alt="pic" height="200" width="200" />
          <Link
            className="name"
            key={gladi.name}
            to={{
              pathname: `/detailed_view/${gladi.name}`,
              state: gladi
            }}
          >
            {gladi.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ListView;
