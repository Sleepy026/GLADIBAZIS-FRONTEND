import React, { createContext, useState, useEffect, useContext } from "react";
import GladiDataType from "../models/GladiDataType";
import axios from "axios";

type ContextProps = {
  gladiData: GladiDataType[] | null;
  filteredGladiData: GladiDataType[] | null;
  handleNameInput: (e: any) => void;
  handleColorInput: (e: any) => void;
  handleHeightInput: (e: any) => void;
};

export const GladiContext = createContext<Partial<ContextProps>>({});

interface Propsz {}

const GladiProvider: React.FC<Propsz> = (props) => {
  const [gladiData, setGladiData] = useState<GladiDataType[] | null>();
  const [filteredGladiData, setFilteredGladiData] = useState<
    GladiDataType[] | null
  >();
  const [searchName, setSearchName] = useState("");
  const [searchColor, setSearchColor] = useState("");
  const [searchHeigth, setSearchHeigth] = useState(0);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/all_gladiolus`)
      .then((res) => {
        setGladiData(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    const filteredGladis = gladiData?.filter((gladi) => {
      return (
        gladi.name.includes(searchName) ||
        gladi.color.includes(searchColor) ||
        gladi.height === searchHeigth
      );
    });
    setFilteredGladiData(filteredGladis);
  }, [searchName, searchColor, searchHeigth, gladiData]);

  const handleNameInput = (e: any) => {
    setSearchName(e.target.value);
  };

  const handleColorInput = (e: any) => {
    setSearchColor(e.target.value);
  };

  const handleHeightInput = (e: any) => {
    setSearchHeigth(parseInt(e.target.value));
  };

  return (
    <GladiContext.Provider
      value={{
        filteredGladiData,
        handleNameInput,
        handleColorInput,
        handleHeightInput,
      }}
    >
      {props.children}
    </GladiContext.Provider>
  );
};

export const useAuthDataContext = () => useContext(GladiContext);

export default GladiProvider;
