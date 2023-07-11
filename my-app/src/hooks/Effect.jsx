import React,{useState,useEffect} from 'react'

const Effect = () => {
    const[data,setData]=useState(1)
    const[num,setNum]=useState(1)

    useEffect(()=>{
        alert('this is a pg effect')
    },[])
  return (
   <>
   <h2 className='text-danger'>{data}</h2>
   <button className='btn btn-warning' onClick={()=>setData(data+2)}>Add</button>
   <h2 className='text-info'>{num}</h2>
   <button className='btn btn-secondary' onClick={()=>setNum(num+5)}>Add</button>
   </>
  )
}

export default Effect