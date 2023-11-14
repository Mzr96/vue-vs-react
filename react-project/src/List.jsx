import ListItem from "./ListItem"

function List({listItems,onRemoveItem,onChangeState}){
    return(<ul className="list">
    <h2>ToDos</h2>
    {listItems.map(item=><ListItem
      key={item.id}
      title={item.title}
      id={item.id}
      state={item.state} 
      onRemoveItem={onRemoveItem}
      onChangeState={onChangeState}
    />)}

  </ul>
)
}

export default List