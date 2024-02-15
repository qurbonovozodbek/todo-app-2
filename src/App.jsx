import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import { i } from "vite/dist/node/types.d-jgA8ss1A";

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([])

  

  function addItem() {
    if(!newItem.trim()) {
      alert('input empty')
      return false;
    }
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem
    };

    setItems(oldList => [...oldList, item])
    setNewItem("");

    localStorage.setItem('item', item.value)
  }
  function deleteItems(id) {
    const newArray = items.filter(item => item.id !== id);
    setItems(newArray);
  }

  return (
    <>
      <div className="container">
        <div className="bganime"></div>
        <h1>All Tasks</h1>
        <div id="form">
          <input
            type="text"
            placeholder="Write here..."
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />

          <button onClick={addItem}>Qo'shish</button>
        </div>
        <div className="cards">
          <div className="card">
            {
              items.map(item => {
                return (
                  <h4 key={item.id}> {item.value} <button onClick={() => deleteItems(item.id)}>x</button> </h4>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
