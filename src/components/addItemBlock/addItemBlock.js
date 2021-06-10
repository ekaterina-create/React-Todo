import React, { useState } from 'react';
import './addItemBlock.css'


function AddItemBlock({ onAddItem }) {
   const [value, setValue] = useState('')

   function onLabelChange(event) {
      setValue(event.target.value)

   }
   function onSubmit(event) {
      event.preventDefault()
      onAddItem(value)
      setValue('')
   }
   return (
      <form className='form-inline' onSubmit={onSubmit}>
         <input type="text" className='form-control add__input' value={value} onChange={onLabelChange} placeholder='Добавить новое дело' />
      </form>

   )
}


export default AddItemBlock