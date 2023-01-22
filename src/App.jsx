import { useEffect, useReducer, useState } from 'react'
import './App.css'
import ShoppingList from './components/ShoppingList'
import AddItemForm from './components/AddItemForm'
import shoppingListReducer from './utlities/shoppingListReducer'

function App() {
  const [state, dispatch] = useReducer(shoppingListReducer, 
    JSON.parse(window.localStorage.getItem('items')) || [])

  useEffect(() => {
    window.localStorage.setItem('items', JSON.stringify(state))
  }, [state])

  const addItem = (item) => dispatch({data: item, type: 'ADD'})
  const removeItem = (itemId) =>  dispatch({id: itemId, type: 'REMOVE'})
  const completeItem = (itemId) =>  dispatch({id: itemId, type: 'COMPLETE'})

  return (
    <div className="App">
      <h1>Items to buy</h1>
      <AddItemForm addItem={addItem} />
      {state.length >= 1 && 
      <ShoppingList list={state} removeItem={removeItem} completeItem={completeItem}/>}
    </div>
  )
}

export default App


