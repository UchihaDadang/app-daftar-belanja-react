import { GroceryList } from "./GorceryList/GorceryList";
import { Headers } from "./Headers.jsx/Headers";
import { Form } from "./Form/Form";
import { Footer } from "./Footer/Footer";
import { useState } from "react";
import { groceryItems } from "./assets/gorceryItems";


export default function App() {

  const [items, setItems] = useState(groceryItems);

  function handleAddItem(item){
    setItems([...items, item])
  }

  function handleDeleteItem(id){
    setItems((items) => items.filter((item) => item.id !== id));
  }

function handleTogleItem(id){
  setItems((items) => items.map((item) => item.id === id ? {...item, checked: !item.checked}: item))
}

  return (
    <div className="app">
      <Headers/>
      <Form onAddItem={handleAddItem}/>
      <GroceryList items={items} onDeleteItem={handleDeleteItem} onTogleItem={handleTogleItem}/>
      <Footer/>
    </div>
  )
}
