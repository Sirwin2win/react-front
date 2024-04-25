import React from 'react';
import { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import Spinner from '../components/Spinner';

const CategoryListing = () => {

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

  const styles = {
    marginLeft: '200px'
  }
  
  return (
    <div style={styles}>
      {loading ? (
      <Spinner loading={loading} /> 
      ): (
        <>
            {category.map((v)=>(
        <>
        <li key={v.id}>{v.name}</li>
        <span><Link to={`/${v.id}/detail`}>More</Link></span>
        </>
      ))} 
        </>
      ) }
      
      
    </div>
  )
}

export default CategoryListing
