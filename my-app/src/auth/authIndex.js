import{API} from "../config";

//for signup
export const signup=user=>{
    return fetch(`${API}/register`,{
        method:'POST',
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
    })
    .then(res=>{
        return res.json()
    })
    .catch(err=>console.log(err))
}

//for signin
export const signin=user=>{
    return fetch(`${API}/signin`,{
        method:'POST',
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
    })
    .then(res=>{
        return res.json()
    })
    .catch(err=>console.log(err))
}

//authenticate and to store token in the local storage 
export const authenticate=(data,next)=>{
    if(typeof window !=='undefined'){
        localStorage.setItem('jwt',JSON.stringify(data))
        next()
    } 
}

//redirect user role if authenticated(authorization)
export const isAuthenticated=()=>{
    if(typeof window==='undefined'){
        return false
    }
    if(localStorage.getItem('jwt')){
        return JSON.parse(localStorage.getItem('jwt'))
    }
    else{
        return false
    }
}

//signout
export const signout=next=>{
    if(typeof window!=='undefined'){
        localStorage.removeItem('jwt')
        next()
        return fetch(`${API}/signout`,{
            method:'POST'
        })
        .then(res=>{
            console.log('signout',res)
        })
        .catch(err=>console.log(err))
    }
}

//forget password
export const forgetpassword=user=>{
    return fetch(`${API}/forgetpassword`,{
        method:'POST',
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
    })
    .then(res=>{
        return res.json()
    })
    .catch(err=>console.log(err))
}
