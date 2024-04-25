import React from 'react';
import { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons';

const ManageProduct = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
  
  
    useEffect( ()=> {
      const fetchProduct = async ()=>{
        try {
          const res = await axios.get("http://127.0.0.1:8000/products/");
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
    const colors = {
      color:'red'
    }
    const color1 = {
      color:'orange'
    }
  
  
  
    const deleteProduct = async (id) => {
      try {
        await axios.delete(`http://127.0.0.1:8000/delete-product/${id}/`);
        // console.log("Post deleted:", id);
        setProduct(product.filter((product) => product.id !== id));
      } catch (error) {
        console.error("Error deleting category:", error);
      }
    };
  
    const onDeleteClick = (productId)=>{
      const confirm = window.confirm('Are your sure you want to delete this category?');
      if(!confirm) return;
      deleteProduct(productId);
      navigate('/products');
  
    }
  
  
    return (
      <>
        <h3>Manage Product</h3>
        <table className="table table-bordered table-hover">
                      <thead>
                        <tr>
                          <th>S/N</th>
                          <th>Product Title</th>
                          <th>Description</th>
                          <th>Video</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
        {product.map((v)=>(
          <tr>
               <td > { v.id } </td>
                  <td key={v.id}> { v.title } </td>
                  <td key={v.id}> { v.description } </td>
                  <td key={v.id}> 
                  <video width="50" length="50" controls controlsList="nodownload">
						<source key={v.id} src={ v.file } type="video/mp4" />
						Your browser does not support HTML5 video.
					  </video>
                   </td>
          <td ><Link to={`/${v.id}/edit-product`}><Icon.Pencil style={color1}/></Link> |
           {/* <Link to={`/${v.id}/detail`}><Icon.Trash style={colors}/></Link>  */}
           <button onClick={()=>onDeleteClick(v.id)}><Icon.Trash style={colors}/></button>
           </td>
          {/* <span><Link to={`/${v.id}/detail`}>More</Link></span> */}
          </tr>
          
        ))}
        </tbody>
        </table>
  {/* <FaMapMarker /> */}
      </>
    )
  }

export default ManageProduct
