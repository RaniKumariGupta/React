import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Datafetch = () => {
    const[products,setProducts]=useState([])
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products`)
        .then(res=>{
            console.log(res.data)
            setProducts(res.data)
        })
        .catch(err=>console.log(err))
    },[])
  return (
    <>
     {products && products.map((item,i)=>{
       return ( 
        <div key={i}>
              <h1 className='text-primary'>{item.title}</h1>
              <h2>${item.price}</h2>
        </div>
       
       )
          })}
    
    </>
  )
}

export default Datafetch