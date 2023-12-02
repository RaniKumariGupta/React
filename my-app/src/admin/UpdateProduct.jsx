import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import { API } from '../config'
import { isAuthenticated } from '../auth/authIndex'
import { useParams } from 'react-router-dom'

const UpdateProduct = () => {
    const params=useParams()
    const{token}=isAuthenticated()
    const [categories, setCategory]=useState([])
    const id=params.productId 
    const[initialValues,setInitialValues]=useState([])
    const[product_name,setProductDataName]=useState('')
    const[product_price,setProductPrice]=useState('')
    const[countInStock,setCountInStock]=useState('')
    const[product_description,setProductDescription]=useState('')
    const[product_image,setProductImage]=useState(null)
    const[categoryId,setCategoryId]=useState('')
    const[error,setError]=useState('')
     const[success,setSuccess]=useState(false)


     useEffect(()=>{
        axios.get(`${API}/allcategory`)
        .then(res=>{
            setCategory(res.data)
        })
        .catch(err => console.log(err))
        axios.get(`${API}/singleproduct/${id}`)
        .then(res=>{
            setInitialValues(res.data)
            setProductDataName(res.data.product_name)
            setProductPrice(res.data.product_price)
            setCountInStock(res.data.countInStock)
            setProductDescription(res.data.product_description)
            setCategoryId(res.data.category._id)

        })
        .catch(err => console.log(err))
     },[])

     const handleSubmit = async event => {
        event.preventDefault()
        try {
            const formData = new FormData()
            formData.append('product_name',product_name)
            formData.append('product_price',product_price)
            formData.append('countInStock',countInStock)
            formData.append('product_description',product_description)
            formData.append('product_image',product_image)
            formData.append('category',categoryId)

            const config = {
                headers:{
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`
                }
            }
            const response = await axios.put(`${API}/updateproduct/${id}`,formData,config)
            setSuccess(true)
            setError('')
        }
        catch (err) {
            setError(err.response.data.error)
            setSuccess(false)
        }
    }

      //to show error message
      const showError=()=>(
        error && <div className='alert alert danger'>
            {error}
        </div>
    )
    //to show success message
    const showSuccess=()=>(
        success && <div className='alert alert-success'>
          product added
        </div>
    )


  return (


    <>
    
    <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-5">
                        <form className='shadow p-3'>
                            <h3 className='text-center text-muted'>
                                Add Product Form
                            </h3>
                            {showError()}
                            {showSuccess()}
                            <div className="mb-2">
                                <label htmlFor="pname">Product Name</label>
                                <input type="text" name="pname" id="pname" className='form-control' onChange={e=>setProductDataName(e.target.value)} value={product_name} />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="price">Product Price</label>
                                <input type="number" name="price" id="price" className='form-control' onChange={e=>setProductPrice(e.target.value)} value={product_price} />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="stock">Stock Quantity</label>
                                <input type="number" name="stock" id="stock" className='form-control' onChange={e=>setCountInStock(e.target.value)} value={countInStock} />
                            </div>
                            <div className='mb-2'>
                                <label htmlFor="description"></label>
                                    <textarea name="description" id="description" cols="30" rows="10"   onChange={e=>setProductDescription(e.target.value)} value={product_description} className='form-control'></textarea>
                             
                            </div>
                            <div className="mb-2">
                                <label htmlFor="image">Product Image</label>
                                <input type="file" name="image" id="image" className='form-control' onChange={e=>setProductImage(e.target.files[0])}/>
                            </div>
                            <div className="mb-2">
                                <label htmlFor="category">Category</label>
                                <select name="category" id="category" className='form-control' onChange={e=>setCategoryId(e.target.value)}>
                                    <option value={categoryId}>{initialValues.category && initialValues.category.category_name}</option>
                                    {categories && categories.map((c, i) => (
                                        <option value={c._id} key={i}>{c.category_name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className='mb-2'>
                                <button className='btn btn-primary' onClick={handleSubmit}>Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    
    </>
  )
}

export default UpdateProduct