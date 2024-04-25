import { useParams, useLoaderData } from "react-router-dom"
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const EditCategoryPage = ({EditCategorySubmit}) => {
    // Please Check out console Ninja extention
    const category = useLoaderData();
    const [name, setName] = useState(category.name);
    const navigate = useNavigate();
    const {id} = useParams();

    const submitForm = (e =>{
      e.preventDefault();
      const updatedCategory = {
        id,
        name,
      };
      EditCategorySubmit(updatedCategory);
      return navigate('/category-listing');
    })
  return (
    <div className='container'>
    <h3>Edit Category</h3>
    <form onSubmit={submitForm}>
<div className="mb-3">
  <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
  <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={name} onChange={(e) => setName(e.target.value)} />
</div>
<input type="submit" className="btn btn-primary" />
</form>
  </div>
  )
}

export default EditCategoryPage
