import React from 'react'
import './searchBar.css';
import data from '../../resource/utilityList.json'

const SearchBar = (props: any) => {
  const searchQuery =(val:string)=>{

    if(val.length>0){
      props.setShowResult(true);
      props.setSearchText(val);
    }else{
      props.setShowResult(false);
      props.setSearchText('');
    }    
  }
  return (
    <>
      <form>
        <div className="search-bar">
          <div className="search">
            <i className="fa fa-search search-icon" aria-hidden="true"></i>
            <input className="fa fa-search"  type='text' onChange={(e)=>searchQuery(e.target.value)} placeholder='Search...' />
          </div>
        </div>
      </form>
    </>
  )
}

export default SearchBar