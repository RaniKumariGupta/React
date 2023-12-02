import React,{useState,useEffect, Fragment} from 'react'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import {FaTrash} from 'react-icons/fa'
import { IMG_URL } from '../config';


const Cart = () => {
    const[products,setProduct]=useState([])
    useEffect(()=>{
           const cartData=JSON.parse(localStorage.getItem('cartItems'))
           setProduct(cartData)
    },[])

    //remove item from cart function
    const removeCartHandler=id=>{
          const cartItems=JSON.parse(localStorage.getItem('cartItems'))
          //remove from the cart using filter
          const filterCart=cartItems.filter(item=>item.id !== id)
          //update product after filter (change the state of a products)
          setProduct(filterCart)
          //update the local storage data after filter
          localStorage.setItem('cartItems',JSON.stringify(filterCart))
          toast.success('item is remove from the cart')
    }
    //increase cart quantity
    const increaseQty=id=>{
        const updateProducts=products.map(item=>{
            if(item.id===id && item.quantity<item.stock){
                return{...item,quantity:item.quantity+1}
            }
            return item
        })
        setProduct(updateProducts)
        localStorage.setItem('cartItems',JSON.stringify(updateProducts))
    }

     //decrease cart quantity
     const decreaseQty=id=>{
        const updateProducts=products.map(item=>{
            if(item.id===id && item.quantity>1){
                return{...item,quantity:item.quantity-1}
            }
            return item
        })
        setProduct(updateProducts)
        localStorage.setItem('cartItems',JSON.stringify(updateProducts))
    }
  return (
    <>
       <ToastContainer theme='colored' position='top-centered'/>
       <div className="container">
        <div className="row d-flex justify-content-evenly my-4">
             {products.length ===0 ? 
            <h2 className='my-5 text-danger text-center'>
                      Your Cart is Empty
            </h2> 
            :(
                <>
                <h2 className='text-center'>
                    Your Cart Items
                </h2>
                <div className="col-md-8 shadow">
                      {products.map((item,i)=>(
                         <Fragment key={i}>
                            <hr/>
                            <div className='row d-flex align-items-center'>
                                <div className="col-2">
                                    <img src={`${IMG_URL}/${item.image}`} alt={item.title} width={'100'} />
                                </div>
                                <div className="col-3">
                                    <span><strong>{item.title}</strong></span>
                                </div>
                                <div className="col-3 text-warning">
                                    Rs{item.price}
                                </div>
                                <div className="col-3">
                                    <div className="d-flex">
                                        <button className='btn btn-danger' onClick={()=>decreaseQty(item.id)}>-</button>
                                        &nbsp;
                                        <input type="number" className='form-control border-0 text-center' value={item.quantity} readOnly />
                                        &nbsp;
                                        <button className='btn btn-primary' onClick={()=>increaseQty(item.id)}>+</button>
                                    </div>
                                </div>
                                <div className="col-1">
                                    <button className='btn btn-danger' onClick={()=>removeCartHandler(item.id)}>
                                        <FaTrash/>
                                    </button>
                                </div>
                            </div>
                            <hr/>
                         </Fragment>
                      ))}
                </div>
                <div className="col-md-3">
                    <div className="shadow p-2">
                        <h5>Cart Summary</h5>
                        <hr/>
                        <span><strong>Units:</strong>{products.reduce((total,item)=>total+Number(item.quantity),0)} Units</span>
                        <br/>
                        <span><strong>Total:</strong>
                         Rs{products.reduce((total,item)=>total+(item.quantity*item.price),0)}
                        </span>
                         <hr/>
                         <button className='btn btn-warning'>Check Out</button>
                    </div>
                </div>
                </>
            )
            }
        </div>
       </div>
    </>
  )
}

export default Cart