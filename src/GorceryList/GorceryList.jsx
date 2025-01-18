import { Item } from "./GorceryListItem";
import { groceryItems } from "../assets/gorceryItems";
import { useState } from "react";

function GroceryList() {
    const [isChecked, setIsChecked] = useState(false);
  
    function handleChacked() {
      setIsChecked(!isChecked);
    };
  
  return(
    <>
    <div className="list">
      <ul>
        {groceryItems.map((item) => (
          <Item item={item} key={item.id} checked={handleChacked} isCheck={isChecked}/>
        ))}
      </ul>
    </div>
    
    <div className="actions">
      <select>
        <option value="input">Urutkan berdasarkan urutan input</option>
        <option value="name">Urutkan berdasarkan nama barang</option>
        <option value="checked">Urutkan berdasarkan ceklis</option>
      </select>
      <button>Bersihkan Daftar</button>
    </div>
  </>
  )
  }

  export { GroceryList };