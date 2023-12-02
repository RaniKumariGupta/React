import React, {useState} from 'react'
import { isAuthenticated } from '../auth/authIndex'
import { API } from '../config'

const AddCategory = () => {
    const[category_name, setCategory]=useState('')
    const[error, setError]=useState('')
    const[success, setSuccess]=useState(false)
    // destructure token
    const{token}=isAuthenticated()

    const handleSubmit=e=>{
        e.preventDefault()
        setError('')
        setSuccess(false)
        //request to post category
        fetch(`${API}/postcategory`,{
            method:'POST',
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json",
                Authorization:`Bearer ${token}`
            },
            body:JSON.stringify({category_name})
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.error){
                setError(data.error)
                setSuccess(false)
            }
            else{
                setError('')
                setSuccess(true)
                setCategory('')
            }
        })
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
          password has been reset successfully 
        </div>
    )

  return (
    <>
    <div className="container">
        <div className="row d-flex justify-content-center">
            <div className="col-md-5">
                <form className='shadow p-3'>
                    <h3 className='text-center'>
                        Add category form
                    </h3>
                    {showError()}
                    {showSuccess()}
                    <div className="mb-2">
                        <label htmlFor="category">category Name</label>
                        <input type="text" name="category" id="category" className='form-control' onChange={e=>setCategory(e.target.value)}/>
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

export default AddCategory