import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { FaTrash,FaEdit } from 'react-icons/fa'
import { API,IMG_URL } from '../config'
import { isAuthenticated } from '../auth/authIndex'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const ShowProduct = () => {
    const {token}=isAuthenticated()
    const[products,setProducts]=useState([])
    useEffect(()=>{
        axios.get(`${API}/allproduct`)
        .then(res=>{
            setProducts(res.data)
        })
        .catch(err => console.log(err))
    },[])

     //delete product 
     const deleteProduct=id=>{
        const confirmed=window.confirm('ARE you sure want to delete this product?')
        if(confirmed){
            axios.delete(`${API}/deleteproduct/${id}`,{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })
            .then(res=>{
                toast.success('Product deleted')
                setProducts(products.filter(c=>c._id!==id))
            })
            .catch(err=>{
                toast.error('Failed to delete product')
            })
        }
    }
  return (
    <>
     <ToastContainer theme='colored' position='top-center'/>
    <div className="container">
        <div className="row d-flex justify-content-center">
            <div className="col-md-10">
                <table className='table table-bordered table-striped'>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Description</th>
                            <th>Image</th>
                            <th>Category</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products && products.map((item,i)=>(
                            <tr key={i}>
                                <td>{item.product_name}</td>
                                <td>{item.product_price}</td>
                                <td>{item.countInStock}</td>
                                <td>{item.product_description}</td>
                                <td><img src={`${IMG_URL}/${item.product_image}`} alt={item.product_name} width={'100'} /></td>
                                <td>{item.category.category_name}</td>
                                <td>
                                    <Link to={`/admin/updateproduct/${item._id}`} className='btn btn-primary'><FaEdit/></Link>
                                    <button className='btn btn-danger' onClick={()=>deleteProduct(item._id)}><FaTrash/></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
                </div>
            </div>
            </div>
    
    </>
  )
}

export default ShowProduct