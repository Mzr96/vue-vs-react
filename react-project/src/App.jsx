import { useState } from 'react'
import List from './List'
import Form from './Form'
import Header from './Header'
import './App.css'

function App() {
  const [listItems, setListItems] = useState([
    { title: "Code Review!", id: 1, state: false },
    { title: "Assign backlogs !", id: 2, state: true },
  ])

  function handleAddItem(newItem){
    setListItems(currentValue=>[...currentValue,newItem])
  }
  function handleRemoveItem(id){
    setListItems(currentValue=>currentValue.filter(item=>item.id!==id))
  }
  function handleChangeState(id){
    setListItems(currentValue=>currentValue.map(item=>item.id===id?{...item,state:!item.state}:item))
  }
  return (
    <>
      <Header />
      <Form onAddItem={handleAddItem}/>
      <List listItems={listItems} onRemoveItem={handleRemoveItem} onChangeState={handleChangeState}/>
    </>
  )
}

export default App
