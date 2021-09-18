import React, {useState, useEffect} from 'react'
import List from "./List"

const App = () => {
  const [inputText, setInputText] = useState("");
  const [todoItems, setTodoItems] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingID, setEditingID] = useState(null);
  const [popupMsg, setPopupMsg] = useState({isShown:false, type:"", msg:""})


  const handleSubmit = e => {
    e.preventDefault()

    if(inputText === "") {
      return;
    } else if(isEditing) {
      // editing stuff
      const newItem = {id: editingID, item:inputText}

      let x = [...todoItems, newItem];

      let final = todoItems.filter((item) => item.id === editingID)


      console.log(final)
      setTodoItems([...final, newItem])
      // reset everything
      setInputText("")
      setIsEditing(false)
      setEditingID(null)
    } else {
      // add an item
      setTodoItems([...todoItems, {id: new Date().getTime().toString(), item:inputText}])
      popupMsgFunctionality(true, "green", "Item added")
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
  

  const popupMsgFunctionality = (isShown, type, msg) => {
    const timeout = setTimeout(() => {
      setPopupMsg({isShown, type, msg})
    }, 3000);

    timeout()

    // return clearTimeout(timeout)
    
  }


  return (
    <section className="todo">

      {popupMsg.isShown ? <article className="popup-msg">item added</article> : ""}
      
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
