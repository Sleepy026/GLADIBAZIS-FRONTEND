import * as React from "react";
import { useContext } from "react";
import { GladiContext } from "../contexts/GladiContext";

interface Props {}

const SearchBar: React.FC<Props> = () => {
  const context = useContext(GladiContext);
  return (
    <div style={{ backgroundColor: "black", color: "white", fontSize: "50px" }}>
      <input type="text" name="name" onChange={context.handleNameInput}></input>
      <input
        type="text"
        name="color"
        onChange={context.handleColorInput}
      ></input>
      <input
        type="number"
        name="height"
        onChange={context.handleHeightInput}
      ></input>
    </div>
  );
};

export default SearchBar;
