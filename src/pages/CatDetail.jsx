import React from 'react'
import { useState, useEffect } from 'react';
import {useParams, useNavigate , useLoaderData} from 'react-router-dom';
import axios from "axios";


const CatDetail = () => {


    const {id} = useParams();
    const [category, setCategory] = useState('');
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

  useEffect (()=>{
        const fetchCategory = async ()=>{
            try {
              const res = await axios.get(`http://127.0.0.1:8000/${id}/detail`);
              setCategory(res.data);
            } catch (error) {
              console.log('Error fetching data', error);
            }
            finally{
              setLoading(false);
            }
          }
          fetchCategory();
        }, []);



        const deleteCategory = async (id) => {
          try {
            await axios.delete(`http://127.0.0.1:8000/delete/${id}/`);
            // console.log("Post deleted:", id);
            setCategory(category.filter((category) => category.id !== id));
          } catch (error) {
            console.error("Error deleting category:", error);
          }
        };

        const onDeleteClick = (categoryId)=>{
          const confirm = window.confirm('Are your sure you want to delete this category?');
          if(!confirm) return;
          deleteCategory(categoryId);
          navigate('/category-listing');

        }

  return (
    <div>
      <h3>{category.name}</h3>
      <h3>{category.id}</h3>
      <button className='btn btn-danger' onClick={()=>onDeleteClick(category.id)}>Delete Category</button> 
    </div>
  )
}


  export default CatDetail
