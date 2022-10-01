import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct, getProduct, productSelectors } from "../features/productSlice";
import { Link } from "react-router-dom";

export const ShowProduct = () => {
  const dispatch = useDispatch();
  const products = useSelector(productSelectors.selectAll);

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  const handleDelete = async (id) => {
    await dispatch(deleteProduct(id))
    dispatch(getProduct());
  }

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Show Product</h1>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        {products.map((products, index) => (
          <tbody key={products.id}>
            <tr>
              <td>{index + 1}</td>
              <td>{products.title}</td>
              <td>{products.price}</td>
              <td>
                <button>
                  <Link to={`/edit/${products.id}`}>Edit</Link>
                </button>
                <button onClick={()=> handleDelete(products.id)}>Delete</button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};
