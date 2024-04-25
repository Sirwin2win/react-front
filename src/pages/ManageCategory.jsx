import React from 'react';
import { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons';
import AddCategoryPage from './AddCategoryPage'


const ManageCategory = () => {

    const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect( ()=> {
    const fetchCategory = async ()=>{
      try {
        const res = await axios.get("http://127.0.0.1:8000/categories");
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
  const colors = {
    color:'red'
  }
  const color1 = {
    color:'orange'
  }



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
    <>
      <h3>Manage Category</h3>
      <table className="table table-bordered table-hover">
                    <thead>
                      <tr>
                        <th>S/N</th>
                        <th>Category Name</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
      {category.map((v)=>(
        <tr>
             <td > { v.id } </td>
                <td key={v.id}> { v.name } </td>
        <td ><Link to={`/${v.id}/edit-category`}><Icon.Pencil style={color1}/></Link> |
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

export default ManageCategory
