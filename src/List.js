import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'

const List = ({todoItems}) => {
  return (
    <ul className="todo__items">
        {todoItems.map((props) => {
          const {id, item} = props;
          return (
            <li className="todo__item" key={id}>
              <div className="todo__item__text">{item}</div>
              <div className="todo__item__btns">
                <button className="item__btns__edit-btn" type="button"><FaEdit/></button>
                <button className="item__btns__delete-btn" type="button"><FaTrash/></button>
              </div>
            </li>
          )
        })}
    </ul>
  )
}

export default List
