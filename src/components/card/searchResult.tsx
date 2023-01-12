//@ts-ignore
import { useState } from "react";
import MaxWidthDialog from "../dialogs/codepan";
import Card from "./card";
import "./card.css";
import UtilityFunctionList from "../../resource/utilityList.json";
import { methodData } from "../../resource/utilityMethods/methods";

const SearchResult = (props: any) => {
  const key = "Masked-Email-Generator";
  const [openDialog, setOpenDialog] = useState(false);
  const [methodValue, setMethodValue] = useState(methodData[key])
  console.log("result---", props.searchText);
  
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
            <span>Search Results</span>
          </div>
          {/* <div className="right">
       <button className="btn">Download Code</button>
      </div> */}
        </div>
        <div className="card-boards">
          {UtilityFunctionList.filter((e) => e.UtilityName.toLowerCase().includes(props.searchText.toLowerCase())).map((element, index) => {
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

export default SearchResult;
