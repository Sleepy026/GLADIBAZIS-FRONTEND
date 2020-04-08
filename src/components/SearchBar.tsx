import * as React from "react";

interface Props {}

const SearchBar: React.FC<Props> = () => {
  return (
    <div style={{ backgroundColor: "black", color: "white", fontSize: "50px" }}>
      <input type="text" name="name"></input>
      <input type="text" name="color"></input>
      <input type="number" name="height"></input>
    </div>
  );
};

export default SearchBar;
