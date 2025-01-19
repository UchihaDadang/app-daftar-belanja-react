import { useState } from "react";

function Form({ onAddItem }) {
const [name, setName] = useState('');
const [quantity, setQuantity] = useState(1);

function handleSubmit(e) {
    e.preventDefault();

    if(!name) return;
    
    const newItems = { name : name, quantity: quantity, chacked : false, id : Date.now() };
    onAddItem(newItems);

    console.log(newItems);

    setName('');
    setQuantity(1);

}

const quantityNumber = [...Array(10)].map((_, index) => (
    <option value={index + 1} key={index + 1}>{index + 1}</option>
))

    return(
        <form className="add-form" onSubmit={handleSubmit}>
          <h3>Hari ini belanja apa kita?</h3>
          <div>
            <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>{quantityNumber}</select>
            <input type="text" placeholder="nama barang..." value={name} onChange={(e) => setName(e.target.value)}/>
          </div>
          <button>Tambah</button>
        </form>
    )
  }

export { Form };
  