import classes from './Search.module.css'

import svgLogo from './assets/search.svg' 


const Search = (props) => {
   return (
    
    <div className={classes.search}>

      <div className={classes['search-input']}>
       <img src={svgLogo} alt="svg" id="svg" />

        <input type="text" placeholder="Search..." onChange={(event) => props.onSearch(event)}/>
      </div>
    </div>
    
   )
}

export default Search;