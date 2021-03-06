import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import "./search.scss";

export function Search({...props}){
  return (
    <div className="searchContainer">
      <input type="text" {...props}/>
      <SearchIcon />
    </div>
  )
}