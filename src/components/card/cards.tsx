//@ts-ignore
import { useState } from "react";
import MaxWidthDialog from "../dialogs/codepan";
import Card from "./card";
import "./card.css";
import UtilityFunctionList from "../../resource/utilityFunctionList.json";
import { methodData } from "../../resource/utilityMethods/methods";

const Cards = () => {
  const key = "Masked-Email-Generator";
  const [openDialog, setOpenDialog] = useState(false);
  const [methodValue, setMethodValue] = useState(methodData[key])
  const handleCardClick = (methodName: string) => {
    setOpenDialog(true);
    setMethodValue(methodData[methodName])
  };

  const handlePopupClose = () => {
    setOpenDialog(false);
  };

  return (
    <div>
      <MaxWidthDialog
        open={openDialog}
        handleClose={handlePopupClose}
        methodValue={methodValue}
      ></MaxWidthDialog>
      <div className="cards">
        <div className="category">
          <div className="left">
            <span>String</span>
          </div>
          {/* <div className="right">
       <button className="btn">Download Code</button>
      </div> */}
        </div>
        <div className="card-boards">
          {UtilityFunctionList.String.map((element, index) => {
            return (
              <Card
                handleCard={() => handleCardClick(element.FilePath)}
                title={element.UtilityName}
                description={element.Description}
                fileName={element.FilePath}
                key={index}
              />
            );
          })}
        </div>
      </div>
      <div className="cards">
        <div className="category">
          <div className="left">
            <span>Date</span>
          </div>
        </div>
        <div className="card-boards">
          {UtilityFunctionList.Date.map((element, index) => {
            return (
              <Card
                handleCard={() => handleCardClick(element.FilePath)}
                title={element.UtilityName}
                description={element.Description}
                fileName={element.FilePath}
                key={index}
              />
            );
          })}
        </div>
      </div>
      <div className="cards">
        <div className="category">
          <div className="left">
            <span>File</span>
          </div>
        </div>
        <div className="card-boards">
          {UtilityFunctionList.File.map((element, index) => {
            
            return (
              <Card
                handleCard={() => handleCardClick(element.FilePath)}
                title={element.UtilityName}
                description={element.Description}
                fileName={element.FilePath}
                key={index}
              />
            );
          })}
        </div>
      </div>
      <div className="cards">
        <div className="category">
          <div className="left">
            <span>General</span>
          </div>
        </div>
        <div className="card-boards">
          {UtilityFunctionList.General.map((element, index) => {
            return (
              <Card
                handleCard={() => handleCardClick(element.FilePath)}
                title={element.UtilityName}
                description={element.Description}
                fileName={element.FilePath}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
    // })
  );
};

export default Cards;
