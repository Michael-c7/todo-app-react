import React, {useState, useEffect} from 'react'
import List from "./List"

const App = () => {
  const [inputText, setInputText] = useState("");
  const [todoItems, setTodoItems] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingID, setEditingID] = useState(null);


  const handleSubmit = e => {
    e.preventDefault()

    if(inputText === "") {
      return;
    } else if(isEditing) {
      // editing stuff
      // const newItem = {id: new Date().getTime().toString(), item:todoItems.filter((item) => item.id === editingID)};
      // setTodoItems([...todoItems, newItem])

            /*
      const newItem = {id: new Date().getTime().toString(), title:name}
      setList([...list, newItem])
      */

      // reset everything
      setInputText("")
      setIsEditing(false)
      setEditingID(null)
    } else {
      setTodoItems([...todoItems, {id: new Date().getTime().toString(), item:inputText}])
      setInputText("")
    }

  }

  const deleteItem = id => 
    setTodoItems(todoItems.filter((item) => item.id !== id));

  
  const editItem = (id, item) => {
    setIsEditing(true)
    setEditingID(id)
    // const currentItem = todoItems.filter((item) => item.id === id);
    setInputText(item)

  }


  return (
    <section className="todo">
      <h1 className="todo-header">Todo app</h1>

      <form className="todo__form" onSubmit={handleSubmit}>
        <label htmlFor="item"></label>
        <input className="form__input" type="text" name="item"
          id="item" maxLength="40" placeholder="Eg: Buy Bread" autoFocus={true}
          value={inputText} onChange={(e) => setInputText(e.target.value)}/>
        <button className="form__submit-btn" type="submit">{isEditing ? "Edit" : "Submit"}</button>
      </form>

      <List todoItems={todoItems} deleteItem={deleteItem} editItem={editItem}/>

      {todoItems.length > 0 ? <button className="delete-all-btn" onClick={() => setTodoItems([])}>Clear Items</button> : ""}
    </section>


  )
}

export default App
