export default function shoppingListReducer(state, action) {
    switch(action.type) {
      case "ADD": 
        return [...state, action.data]
  
      case "REMOVE":
        return state.filter(item => item.id !== action.id)
  
      case "COMPLETE":
        console.log('completing')
        return  state.map(item => item.id !== action.id ? item :{...item, isComplete: !item.isComplete})
  
      default: throw Error('no type')
    }
  }