import { useParams, useLoaderData, useNavigate } from "react-router-dom"
import { useState, useEffect } from 'react'
import axios from "axios";




const EditProductPage = ({EditProductSubmit}) => {
   // Please Check out console Ninja extention
   const product = useLoaderData();
   const [title, setTitle] = useState(product.title);
   const [description, setDescription] = useState(product.description);
   const [file, setFile] = useState(product.file);
   const navigate = useNavigate();
   const {id} = useParams();
   const UPLOAD_ENDPOINT = `http://127.0.0.1:8000/update-product/${product.id}/`

  //  const submitForm = (e =>{
  //    e.preventDefault();
  //    const updatedProduct = {
  //      id,
  //      file,
  //      description,
  //      title,
  //    };
  //    EditProductSubmit(updatedProduct);
  //    return navigate('/products');
  //  })



   const handleSubmit = async (event) => {
    //setStatus(""); // Reset status
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
  {file ? formData.append("file", file) : formData.append("file", product.file) }
    
    formData.append("description", description);
    // formData.append("category_id", category_id);
    console.log(formData);
    const resp = await axios.put(UPLOAD_ENDPOINT, formData, {
      headers: {
        "content-type": "multipart/form-data",
        // Authorization: `Bearer ${userInfo.token}`,
      },
    });
    // setStatus(resp.status === 200 ? "Thank you!" : "Error.");
    return navigate('/products');
  };



 return (
   <div className='container'>
   <h3>Edit Product</h3>
   <form onSubmit={handleSubmit}>
   <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={title} onChange={(e) => setTitle(e.target.value)} />
    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Product image</label>
    <input type="file" className="form-control" id="exampleInputPassword1" onChange={(e) => setFile(e.target.files[0])} required/>
  </div>
{/* <input type="hidden" value={file} onChange={(e) => setFile(e.target.files[0])} /> */}
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
  {/* <input type="submit" className="btn btn-primary" value="Edit Product"/> */}
  <button className="btn btn-primary"> Edit Product</button>
</form>
 </div>
 )
}
export default EditProductPage
