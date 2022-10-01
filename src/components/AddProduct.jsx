import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createProduct } from '../features/productSlice'

export const AddProduct = () => {
    const [title, setTitle]= useState('')
    const [price, setPrice]= useState('')
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        await dispatch(createProduct({title,price}))
        navigate('/')
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title : </label>
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
            </div>
            <div>
                <label>Price : </label>
                <input type="text" value={price} onChange={(e)=>setPrice(e.target.value)} />
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    </div>
  )
}
