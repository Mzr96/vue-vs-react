function ListItem({title,state,id,onChangeState,onRemoveItem}){
    return(<li className={state? 'done':""}>
    <span>{ title }</span>
     <div className="item-actions">
      <button className="danger" onClick={()=>onRemoveItem(id)} >
        Remove
      </button>
      <button className="info" onClick={()=>onChangeState(id)}>
        Change State!
      </button>
    </div>
  </li>)
}

export default ListItem