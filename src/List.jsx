import React from 'react'

const List = (item) => {
  return (
    <div>
        <h1>List Of Items Available...</h1>
      <ul>
        <li>Item name: {item.item1}</li>
        <li>Item name: {item.item2}</li>
        <li>Item name: {item.item3}</li>
        <li>Item name: {item.item4}</li>
        <li>Item name: {item.item5}</li>
      </ul>
    </div>
  )
}

export default List



// https://docs.google.com/document/d/1BPQ0lUjnVA4oUiWUX9-hRkdZDhPQLBjxLJo3ZPy4pdI/edit?usp=sharing