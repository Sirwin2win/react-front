import React from 'react';
import { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom'

const Products = () => {
    const [category, setCategory] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect( ()=> {
        const fetchCategory = async ()=>{
          try {
            const res = await axios.get("http://127.0.0.1:8000/products/");
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
  return (
    <div className='container'>
        <div class="row mt-5">
            {/* <div class="col-3"> */}
      {category.map((v)=>(
        <div class="col-4">
        {/* <li key={v.id}>{v.id}</li> */}
        <video width="200" length="100" controls controlsList="nodownload">
						<source src={ v.file } type="video/mp4" />
						Your browser does not support HTML5 video.
					  </video>
                      <p key={v.title}>{v.title}</p>
        <p key={v.description}>{v.description}</p>
                    
        <span><Link to={`/${v.id}/product`}>More</Link></span>
        </div>
      ))} 
    </div>
    </div>
    // </div>

  )
}

export default Products
