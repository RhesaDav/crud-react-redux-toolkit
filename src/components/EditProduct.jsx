import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getProduct, productSelectors, updateProduct } from '../features/productSlice'

export const EditProduct = () => {
    const [title, setTitle]= useState('')
    const [price, setPrice]= useState('')
    const dispatch = useDispatch();
    const {id} = useParams()
    const navigate = useNavigate()

    const product = useSelector((state) => productSelectors.selectById(state, id))

    useEffect(() => {
        dispatch(getProduct)
    }, [dispatch])

    useEffect(() => {
        if(product) {
            setTitle(product.title)
            setPrice(product.price)
        }
    }, [product])

    const handleSubmit = async (e) => {
        e.preventDefault(e)
        await dispatch(updateProduct({id, title, price}))
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
                <button>Update</button>
            </div>
        </form>
    </div>
  )
}
