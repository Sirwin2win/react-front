import React from 'react'
import { useState, useEffect } from 'react';
import {useParams, useNavigate , useLoaderData} from 'react-router-dom';
import axios from "axios";



const ProdDetail = () => {
    const {id} = useParams();
    const [product, setProduct] = useState('');
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

  useEffect (()=>{
        const fetchProduct = async ()=>{
            try {
              const res = await axios.get(`http://127.0.0.1:8000/${id}/product/`);
              setProduct(res.data);
            } catch (error) {
              console.log('Error fetching data', error);
            }
            finally{
              setLoading(false);
            }
          }
          fetchProduct();
        }, []);



        const deleteProduct = async (id) => {
          try {
            await axios.delete(`http://127.0.0.1:8000/delete-product/${id}/`);
            // console.log("Post deleted:", id);
            setProduct(product.filter((product) => product.id !== id));
          } catch (error) {
            console.error("Error deleting product:", error);
          }
        };

        const onDeleteClick = (productId)=>{
          const confirm = window.confirm('Are your sure you want to delete this category?');
          if(!confirm) return;
          deleteProduct(productId);
          navigate('/product-detail');

        }

  return (
    <div className='container'>
          <video width="200" length="100" controls controlsList="nodownload">
						<source src={ product.file } key={product.id} type="video/mp4" />
						Your browser does not support HTML5 video.
					  </video>
      <h3>{product.title}</h3>
      <h3>{product.id}</h3>
      <button className='btn btn-danger' onClick={()=>onDeleteClick(product.id)}>Delete Product</button> 
    </div>
  )
}


export default ProdDetail
