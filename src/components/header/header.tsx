import React from "react";
import "./header.css";
import SearchBar from "../searchBar/searchBar";


const Header = (props:any) => {
  return (
    <div className="header">
      <span>Utility Code Generator</span>
      <p>
      The Utility Code Generator Tool provides frequently used utility code in multiple popular languages.
      </p>
      <SearchBar setShowResult={props.setShowResult} setSearchText={props.setSearchText}/>
    </div>
  );
};

export default Header;
