import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { API } from '../config'

const EmailVerify = () => {
    const params = useParams()
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        const token = params.token
        fetch(`${API}/confirmation/${token}`, {
            method: 'PUT',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    setError(data.error)
                    setSuccess(false)
                }
                else {
                    setSuccess(true)
                    setError('')
                }
            })
            .catch(err => console.log(err))

    }, [params.token])

    //to show error message
    const showError = () => (
        error && <div className='alert alert danger'>
            {error}
        </div>
    )
    //to show success message
    const showSuccess = () => (
        success && <div className='alert alert-success'>
            email has been verified successfully,login to continue
        </div>
    )
    return (
        <>
            {showError()}
            {showSuccess()}

        </>
    )
}

export default EmailVerify