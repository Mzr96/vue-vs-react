import { useState } from "react"

function Form({onAddItem}){
    const [title,setTitle] = useState('')
    const [state,setState] = useState(false)
    function titleChangeHandler(e){
        setTitle(e.target.value)
    }
    function stateChangeHandler(){
        setState(currentValue=>!Boolean(currentValue))
    }
    function submitHandler(e){
        e.preventDefault()
        onAddItem({title,state,id:Date.now()})
    }
    return(<form onSubmit={submitHandler}>
    <div className="form-control">
      <input onChange={(e)=>titleChangeHandler(e)} placeholder="Enter Title" type="text"/>
    </div>
    <select value={state} onChange={stateChangeHandler}>
      <option value={true}>Finished</option>
      <option value={false}>In Progress</option>
    </select>
    <button className="info">Add</button>
  </form>)
}

export default Form