import React ,{useState} from 'react'

const IncrementDecrement = () => {
    const[num,setNum]=useState(1)

    // const incrementFunc=()=>{
    //     setNum(num+1)
    // }
  return (
    <>
    <h2 className='text-success'>{num}</h2>
    {/* <button className='btn btn-primary'onClick={incrementFunc}>Increment</button> */}
    <button className='btn btn-primary'onClick={()=>setNum(num+1)}>Increment</button>
    &nbsp;  &nbsp;  &nbsp;
    {
        num>1 &&
        <button className='btn btn-danger'onClick={()=>setNum(num-1)}>Decrement</button>
    }
    </>
  )
}

export default IncrementDecrement