import React, { createContext, useState, useEffect, useContext } from "react";
import GladiDataType from "../models/GladiDataType";
import axios from "axios";

type ContextProps = {
  gladiData: GladiDataType[] | null;
  filter: () => void;
};

export const GladiContext = createContext<Partial<ContextProps>>({});

interface Propsz {}

const GladiProvider: React.FC<Propsz> = (props) => {
  const [gladiData, setGladiData] = useState<GladiDataType[] | null>();
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [heigth, setHeigth] = useState(0);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/gladiolus/all`)
      .then((res) => {
        setGladiData(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  function filter(): void {}

  return (
    <GladiContext.Provider value={{ gladiData, filter }}>
      {props.children}
    </GladiContext.Provider>
  );
};

export const useAuthDataContext = () => useContext(GladiContext);

export default GladiProvider;
