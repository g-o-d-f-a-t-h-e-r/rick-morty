import React from 'react'
import styles from './Search.module.scss';

const Search = ({setPageNumber, setSearch}) => {
  return (
   <form className="form d-flex justify-content-center gap-4 my-5" action="">
       <input onChange={e=>{
           setPageNumber(1);
           setSearch(e.target.value)
       }} placeholder="Search for Characters"type="text" name="" id="" className={`${styles.input}`}/>
        <button onClick={e=>e.preventDefault()} className="btn btn-primary fs-5">Search</button>
   </form>
  )
}

export default Search