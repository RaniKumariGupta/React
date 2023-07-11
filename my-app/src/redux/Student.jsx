import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'

const Student = () => {
    const data=useSelector(store=>store.student)
    const dispatch=useDispatch()
    const[name,setName]=useState('')

    const handleSubmit=()=>{
        dispatch({type:'CHANGE_NAME',payload:name})
    }
  return (
   <>
   <h2>The name of the student is {data.studentName}</h2>
   <h1>Form</h1>
      <input type="text" name="std"  placeholder='type name'
      onChange={(e)=>setName(e.target.value)}
      />
      &nbsp;&nbsp;
        <button className='btn btn-primary'onClick={handleSubmit}>submit</button>
   </>
  )
}

export default Student