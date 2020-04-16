import * as React from "react";
import { useContext } from "react";
import { GladiContext } from "../contexts/GladiContext";

interface Props {}

const SearchBar: React.FC<Props> = () => {
  const context = useContext(GladiContext);
  return (
    <div style={{ color: "white", fontSize: "50px" }}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={context.getSearchName}
        onChange={context.handleNameInput}
      ></input>
      <input
        type="text"
        name="color"
        placeholder="Color"
        value={context.getSearchColor}
        onChange={context.handleColorInput}
      ></input>
      <input
        type="number"
        placeholder="Height"
        name="height"
        value={context.getSearchHeight}
        onChange={context.handleHeightInput}
      ></input>
      <button type="submit" onClick={context.resetState}>
        RESET
      </button>
    </div>
  );
};

export default SearchBar;
