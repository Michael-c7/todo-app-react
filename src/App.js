import React, {useState, useEffect} from 'react'

import { FaEdit, FaTrash } from 'react-icons/fa'

const App = () => {
  return (
    <section className="todo">
      <h1 className="todo-header">Todo app</h1>

      <form className="todo__form">
        <label htmlFor="item"></label>
        <input className="form__input" type="text" name="item" id="item" maxlength="40" placeholder="Eg: Bread" autoFocus={true}/>
        <button className="form__submit-btn" type="submit">Submit</button>
      </form>


      <ul className="todo__items">
        <li className="todo__item">
          <div className="todo__item__text">cake</div>
          <div className="todo__item__btns">
            <button className="item__btns__edit-btn" type="button"><FaEdit/></button>
            <button className="item__btns__delete-btn" type="button"><FaTrash/></button>
          </div>
        </li>

        <li className="todo__item">
          <div className="todo__item__text">milk</div>
          <div className="todo__item__btns">
            <button className="item__btns__edit-btn" type="button"><FaEdit/></button>
            <button className="item__btns__delete-btn" type="button"><FaTrash/></button>
          </div>
        </li>

        <li className="todo__item">
          <div className="todo__item__text">eggs</div>
          <div className="todo__item__btns">
            <button className="item__btns__edit-btn" type="button"><FaEdit/></button>
            <button className="item__btns__delete-btn" type="button"><FaTrash/></button>
          </div>
        </li>
      </ul>

      <button className="delete-all-btn" type="button">Clear Items</button>
    </section>


  )
}

export default App
