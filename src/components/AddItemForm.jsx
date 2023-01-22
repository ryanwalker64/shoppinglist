import React, { useEffect, useState } from "react"
import { nanoid } from 'nanoid'

function AddItemForm({addItem}) {
    const [itemName, setItemName] = useState('')

    function handleNewItem(e) {
        e.preventDefault()
        if (!itemName) return
        const item = { id: nanoid(), item: itemName, isComplete: false }
        setItemName('')
        addItem(item)
    }

   
  
    return (
      <form onSubmit={handleNewItem}>
          <input type="text" placeholder='add an item' 
          value={itemName} 
          onChange={(e) => setItemName(e.target.value)}/>
      </form>
    )
  }

export default AddItemForm