import React, { createContext, useState, useEffect, useContext } from "react";
import GladiDataType from "../models/GladiDataType";
import axios from "axios";

type ContextProps = {
  gladiData: GladiDataType[] | null;
  filteredGladiData: GladiDataType[] | null;
  handleNameInput: (e: any) => void;
  handleColorInput: (e: any) => void;
  handleHeightInput: (e: any) => void;
  resetState: () => void;
  getSearchName: string;
  getSearchColor: string;
  getSearchHeight: number;
};

export const GladiContext = createContext<Partial<ContextProps>>({});

interface Propsz {}

const GladiProvider: React.FC<Propsz> = (props) => {
  const [gladiData, setGladiData] = useState<GladiDataType[] | null>();
  const [filteredGladiData, setFilteredGladiData] = useState<
    GladiDataType[] | null
  >();
  const [searchName, setSearchName] = useState<string>("");
  const [searchColor, setSearchColor] = useState<string>("");
  const [searchHeight, setSearchHeight] = useState<number>(NaN);

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
        (gladi.name.toLowerCase().includes(searchName.toLowerCase()) ||
          !searchName) &&
        (gladi.color.toLowerCase().includes(searchColor.toLowerCase()) ||
          !searchColor) &&
        (gladi.height >= searchHeight || !searchHeight)
      );
    });
    setFilteredGladiData(filteredGladis);
  }, [searchName, searchColor, searchHeight, gladiData]);

  const resetState = () => {
    setSearchName("");
    setSearchColor("");
    setSearchHeight(NaN);
  };

  const handleNameInput = (e: any) => {
    setSearchName(e.target.value);
  };

  const handleColorInput = (e: any) => {
    setSearchColor(e.target.value);
  };

  const handleHeightInput = (e: any) => {
    setSearchHeight(parseInt(e.target.value));
  };

  const getSearchName = searchName;

  const getSearchColor = searchColor;

  const getSearchHeight = searchHeight;

  return (
    <GladiContext.Provider
      value={{
        filteredGladiData,
        handleNameInput,
        handleColorInput,
        handleHeightInput,
        resetState,
        getSearchName,
        getSearchColor,
        getSearchHeight,
      }}
    >
      {props.children}
    </GladiContext.Provider>
  );
};

export const useAuthDataContext = () => useContext(GladiContext);

export default GladiProvider;
