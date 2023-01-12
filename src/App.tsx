import React from "react";
import "./App.css";
import Cards from "./components/card/cards";
import SearchResult from "./components/card/searchResult";
import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";

function App() {
  const [showResult, setShowResult] = React.useState(false);
  const [searchText, setSearchText] = React.useState('');

  const handleSearchResultPanel=()=>{
    setShowResult(true);
  }

  return (
    <div className="App">
      <Header setShowResult={setShowResult} setSearchText={setSearchText} isSearching={()=>handleSearchResultPanel()} />
      <div className="main">
        <Sidebar />
        {!showResult ? <Cards /> :  <SearchResult searchText={searchText} />}
      </div>
    </div>
  );
}

export default App;
