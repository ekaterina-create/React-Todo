import React, { Component } from 'react';
import './todoitem.css'


export default class TodoItem extends Component {


   render() {
      const { label, onDeleted, onToggleDone, onToggleImportant, important, done } = this.props;

      let classNames = 'item';
      if (done) {
         classNames += ' done'
      }
      if (important) {
         classNames += ' important'
      }


      return (
         <div className='wrapper'>
            <span className={classNames}
               onClick={onToggleDone}>{label} </span>
            <button className="btn" onClick={onDeleted}>
               <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.7991 3.05176e-05L20.7419 0.942838L0.94289 20.7418L8.27312e-05 19.799L19.7991 3.05176e-05Z" fill="#ADADAD" />
                  <path d="M20.7418 19.799L19.799 20.7418L2.47121e-05 0.942798L0.942833 -1.04904e-05L20.7418 19.799Z" fill="#ADADAD" />
               </svg>
            </button>
            <button className="btn btn-important" onClick={onToggleImportant}>
               <svg width="20" height="20" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.5 12.8589L13.753 16L12.359 10.08L17 6.09684L10.8885 5.58316L8.5 0L6.1115 5.58316L0 6.09684L4.641 10.08L3.247 16L8.5 12.8589Z" fill="#e5e5e5" />
               </svg>
            </button>
         </div>
      )
   }
}
