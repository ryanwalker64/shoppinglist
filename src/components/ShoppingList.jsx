import React, { useEffect } from "react"

function Item({item, completeItem, removeItem}) {

    function handleDoubleClick(e) {
        if(e.detail === 2) {
            completeItem()
        }
    }

    return (
        <p key={item.id}>
                  <span onClick={handleDoubleClick} 
                  style={{textDecoration: item.isComplete && 'line-through'}}
                  >{item.item}</span>
                  <span onClick={() => removeItem(item.id)}>❌</span>
         </p>
    )
}

function ShoppingList({list, removeItem, completeItem}) { 

    const shoppingList = list.map(item => {
    return ( 
        <Item 
        key={item.id} 
        item={item}
        completeItem={() => completeItem(item.id)}
        removeItem={removeItem}
        /> )
})
  
    return (
      <div>
        {shoppingList}
      </div>
    )
  }

export default ShoppingList