import React, {useState, useEffect} from 'react'
import List from "./List"

const App = () => {
  const [inputText, setInputText] = useState("")
  const [todoItems, setTodoItems] = useState([])
  const [isEditing, setIsEdiiting] = useState(false);
  const [editingID, setEditingID] = useState(null)


  const handleSubmit = e => {
    e.preventDefault()
    setTodoItems([...todoItems, {id: new Date().getTime().toString(), item:inputText}])
    console.log(inputText)
  }


  return (
    <section className="todo">
      <h1 className="todo-header">Todo app</h1>

      <form className="todo__form" onSubmit={handleSubmit}>
        <label htmlFor="item"></label>
        <input className="form__input" type="text" name="item"
          id="item" maxLength="40" placeholder="Eg: Buy Bread" autoFocus={true}
          value={inputText} onChange={(e) => setInputText(e.target.value)}/>
        <button className="form__submit-btn" type="submit">Submit</button>
      </form>

      <List todoItems={todoItems}/>

      {todoItems.length > 0 ? <button className="delete-all-btn" type="button">Clear Items</button> : ""}
    </section>


  )
}

export default App
