import React from 'react'
import './itemstatusfilter.css'


export default class ItemStatusFilter extends React.Component {

   buttons = [
      { name: 'Все' },
      { name: 'Сделанные' },
      { name: 'Активные' },
   ]
   render() {
      const { filter, onFilterChange } = this.props;
      const buttons = this.buttons.map(({ name }) => {
         const isActive = filter === name;
         const clazz = isActive ? 'btn-search btn-info active' : "btn-search btn-info";
         return <button className={clazz}
            key={Math.random().toString(12).slice(2)}
            onClick={() => { onFilterChange(name) }}>{name}</button>
      })


      return (
         <span>
            { buttons}
         </span>
      )
   }
}
