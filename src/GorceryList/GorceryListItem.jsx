function Item({ item, onDeleteItem, onTogleItem }) {
    return(
      <li key={item.id}>
        <input type="checkbox" checked={item.checked} onChange={() => onTogleItem(item.id)}/>
          <span style={item.checked ? {textDecoration: 'line-through'} : {textDecoration:'none'}}>
            {item.quantity} {item.name}
          </span>
        <button onClick={() => onDeleteItem(item.id)}>&times;</button>
      </li>
    )
  }

  export { Item };