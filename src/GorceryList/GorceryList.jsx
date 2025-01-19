import { useState } from "react";
import { Item } from "./GorceryListItem";

function GroceryList({items, onDeleteItem, onTogleItem, onDeleteItems}) {

  const [sortBy, setSortBy] = useState('input');

  let sortedItems = [];

  if (sortBy === 'input') {
    sortedItems = items;
  }

  if (sortBy === 'name') {
    sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
  }

  if (sortBy === 'checked') {
    sortedItems = items.slice().sort((a, b) => b.checked - a.checked);
  }


  return(
    <>
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item item={item} key={item.id} onDeleteItem={onDeleteItem} onTogleItem={onTogleItem}/>
        ))}
      </ul>
    </div>
    
    <div className="actions">
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="input">Urutkan berdasarkan urutan input</option>
        <option value="name">Urutkan berdasarkan nama barang</option>
        <option value="checked">Urutkan berdasarkan ceklis</option>
      </select>
      <button onClick={onDeleteItems}>Bersihkan Daftar</button>
    </div>
  </>
  )
  }

  export { GroceryList };