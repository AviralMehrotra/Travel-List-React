import { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import { PackingList } from "./PackingList";
import Stats from "./Stats";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Charger", quantity: 102, packed: true },
// ];

export default function App() {
  const [items, setItems] = useState([]);

  function handleItems(item) {
    setItems((items) => [...items, item]);
  }

  function deleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggle(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList(id) {
    const confirmed = window.confirm(
      "Are you sure you want to clear the list?"
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Header />
      <Form onAddItem={handleItems} />
      <PackingList
        items={items}
        deleteItem={deleteItem}
        handleToggle={handleToggle}
        handleClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
