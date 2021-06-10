import React from 'react'
import ItemStatusFilter from '../itemStatusFilter/itemStatusFilter'

import './searchblock.css'


function SearchBlock(props) {
   const [value, setValue] = React.useState({
      search: '',
   })

   function onSearchChange(event) {
      const search = event.target.value;

      setValue({ search })
      props.onSearchChange(search)
   }

   return (
      <form className="search__form">
         <input type="text" placeholder="Поиск" className={"input form-control"}
            value={value.search}
            onChange={onSearchChange} />
         <ItemStatusFilter filter={props.filter} onFilterChange={props.onFilterChange} />
      </form>
   )
}

export default SearchBlock
