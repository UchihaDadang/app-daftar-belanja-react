import { Item } from "./GorceryListItem";

function GroceryList({items, onDeleteItem, onTogleItem}) {

  return(
    <>
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} key={item.id} onDeleteItem={onDeleteItem} onTogleItem={onTogleItem}/>
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