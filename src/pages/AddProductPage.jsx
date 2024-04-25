import React from "react";
import axios from "axios";
import { useNavigate, useLoaderData } from 'react-router-dom'
import { useState, useEffect } from 'react'

const UPLOAD_ENDPOINT = "http://127.0.0.1:8000/product/";

const AddProductPage = () => {

  const [category, setCategory] = useState([]);
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState('');
  const [category_id, setCategory_id] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  // const { userInfo } = useSelector((state) => state.userLogin);


  // useEffect( ()=> {
  //   const fetchCategory = async ()=>{
  //     try {
  //       const res = await axios.get("http://127.0.0.1:8000/categories");
  //       setCategory(res.data);
  //     } catch (error) {
  //       console.log('Error fetching data', error);
  //     }
  //     finally{
  //       setLoading(false);
  //     }
  //   }
  //   fetchCategory();
  // }, []);
  

  const handleSubmit = async (event) => {
    //setStatus(""); // Reset status
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("description", description);
    // formData.append("category_id", category_id);
    console.log(formData);
    const resp = await axios.post(UPLOAD_ENDPOINT, formData, {
      headers: {
        "content-type": "multipart/form-data",
        // Authorization: `Bearer ${userInfo.token}`,
      },
    });
    // setStatus(resp.status === 200 ? "Thank you!" : "Error.");
    return navigate('/products');
  };


  
  

  return (
    <div className="container">
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={title} onChange={(e) => setTitle(e.target.value)} />
    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Product image</label>
    <input type="file" className="form-control" id="exampleInputPassword1" onChange={(e) => setFile(e.target.files[0])} />
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
    <textarea className="form-control" id="exampleInputPassword1" value={description} onChange={(e) => setDescription(e.target.value)}>
    </textarea>
  </div>
  <div className="mb-3">
  {/* <select className="form-select" aria-label="Default select example" value={category_id} onChange={(e) => setCategory_id(e.target.value)}>
  <option selected>Select Category</option>
  {category.map((v)=>(
    
  <option value={v.id} >{v.name}</option>
  ))}
</select> */}
</div>
  <input type="submit" className="btn btn-primary" value="Add Product"/>
</form>
</div>
  );
}

export default AddProductPage
