function Item({ item, checked, isCheck }) {
    return(
      <li key={item.id}>
        <input type="checkbox" checked={isCheck} onChange={checked}/>
          <span style={isCheck ? {textDecoration: 'line-through'} : {textDecoration:'none'}}>
            {item.quantity} {item.name}
          </span>
        <button>&times;</button>
      </li>
    )
  }

  export { Item };