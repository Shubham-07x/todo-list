import { useState } from "react";
import InputArea from "./InputArea"
import ListItem from "./ListItem";

function App() {
  const [items, setItems] = useState(["Single-click to Cancel item",
  "Double-click to Delete item"]);

  function addItems(newItem) {
    if (newItem.trim() !== "") {
      // Check if newItem is not empty
      setItems((prevItems) => {
        return [...prevItems, newItem];
      });
    }
  }

  function deleteItem(index) {
    setItems((prevItems) => {
      return prevItems.filter((item, i) => i !== index);
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onSubmit={addItems} /> {/* Use the InputArea component */}
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ListItem key={index} index={index} todoItem={todoItem} onDelete={deleteItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
